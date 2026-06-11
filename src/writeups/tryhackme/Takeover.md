# TryHackMe — TakeOver

**Platform:** TryHackMe  
**Category:** Subdomain Enumeration / Reconnaissance  
**Difficulty:** Easy  
**Tools Used:** nmap, ffuf, curl, openssl, /etc/hosts  

---

## Scenario

> *"Hello there, I am the CEO and one of the co-founders of futurevera.thm. In Futurevera, we believe that the future is in space. We do a lot of space research and write blogs about it. We used to help students with space questions, but we are rebuilding our support. Recently blackhat hackers approached us saying they could take over and are asking us for a big ransom. Please help us find what they can take over."*

The fictional company **Futurevera** has been threatened by attackers who claim they can take over parts of their web infrastructure and are demanding a ransom. Our job is to simulate that attacker perspective — enumerate the domain, find forgotten or misconfigured subdomains, and identify the attack surface before the real adversaries exploit it.

**Flag:** `flag{beea0d6edfcee06a59b83fb50ae81b2f}`

---

## Step 1 — Environment Setup: /etc/hosts

Since `futurevera.thm` is a TryHackMe lab domain (not a real DNS-registered domain), we need to manually resolve it by mapping the machine's IP to the domain in our local hosts file.

```bash
sudo nano /etc/hosts
```

Add the following line (replace with your machine's IP):

```
10.10.209.47    futurevera.thm
```

This tells your system to route all requests for `futurevera.thm` to the TryHackMe machine instead of trying to resolve it through public DNS. We'll be adding more entries here as we discover subdomains.

> **Why this matters in real engagements:** Internal/staging domains frequently don't appear in public DNS but are still reachable over the network. Modifying `/etc/hosts` is the standard way to test these without a DNS server.

---

## Step 2 — Port Scanning with Nmap

With the host mapped, we begin active reconnaissance with a service/version detection scan:

```bash
nmap -sC -sV 10.10.209.47
```

**Results:**

```
PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 8.2p1 Ubuntu 4ubuntu0.13 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   3072 5c:a7:05:61:df:6d:8a:72:57:67:68:4e:0b:24:55:bb (RSA)
|   256 f8:d5:e1:25:33:25:7f:3b:f3:90:db:53:8e:85:42:54 (ECDSA)
|_  256 f6:37:4e:6c:bc:6d:d4:45:19:69:f6:2d:3e:30:52:2b (ED25519)
80/tcp  open  http     Apache httpd 2.4.41 ((Ubuntu))
|_http-title: Did not follow redirect to https://futurevera.thm/
443/tcp open  ssl/http Apache httpd 2.4.41 ((Ubuntu))
| ssl-cert: Subject: commonName=futurevera.thm/organizationName=Futurevera
|             stateOrProvinceName=Oregon/countryName=US
| Not valid before: 2022-03-13T10:05:19
|_Not valid after:  2023-03-13T10:05:19
|_ssl-date: TLS randomness does not represent time
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

**Breakdown of findings:**

| Port | Service | Notes |
|---|---|---|
| 22 | SSH | OpenSSH 8.2p1 — standard access, no immediate vector |
| 80 | HTTP | Redirects to `https://futurevera.thm` — no plaintext content |
| 443 | HTTPS | Apache serving the main site; **TLS certificate expired** |

A few things immediately stand out:

- Port 80 does a hard redirect to HTTPS — no content served over plaintext.
- The SSL certificate on port 443 **expired in March 2023**, which is a real-world red flag (certificate mismanagement is a common sign of neglected infrastructure).
- The certificate is issued to `futurevera.thm` — we'll come back to this certificate in detail later.

---

## Step 3 — Initial Web Recon

Navigating to `https://futurevera.thm` shows a basic homepage for a fictional space research company. Visual inspection and source code review reveal nothing useful — no comments, no hidden endpoints, no interesting JS files.

A Gobuster/directory brute-force scan on the root also comes back empty:

```bash
gobuster dir -u https://futurevera.thm -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k
```

No accessible directories. The surface attack vector isn't the main site — it's the **subdomains**.

---

## Step 4 — Subdomain Enumeration with ffuf (VHost Fuzzing)

### Why VHost Fuzzing?

Apache (and nginx) can host multiple websites on a single IP using **virtual hosting** — the server reads the `Host:` HTTP header to decide which site to serve. Subdomains that aren't in public DNS can still be active if they're configured as virtual hosts. We fuzz the `Host:` header to discover these.

### First Pass — Unfiltered

```bash
ffuf -w /usr/share/wordlists/seclists/Discovery/Web-Content/common.txt \
     -H "Host: FUZZ.futurevera.thm" \
     -u https://10.10.209.47/ \
     -k
```

> The `-k` flag skips TLS certificate verification — necessary here because the cert is expired.

This produces an enormous amount of output because every unrecognized subdomain still returns a response (typically the default vhost). We need to filter out the noise.

### Identifying the Baseline Response Size

Look at any false-positive result and note its response size. In this case, the default response is **4605 bytes**. Filter it out:

```bash
ffuf -w /usr/share/wordlists/seclists/Discovery/Web-Content/common.txt \
     -H "Host: FUZZ.futurevera.thm" \
     -u https://10.10.209.47/ \
     -fs 4605 \
     -k
```

For a larger wordlist (Sharon's approach using the top 1 million subdomains list):

```bash
ffuf -c \
     -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-110000.txt \
     -H "Host: FUZZ.futurevera.thm" \
     -u https://futurevera.thm \
     -fs 1234 -fw 10 -fl 14 \
     -k
```

> `-fs` = filter by size, `-fw` = filter by word count, `-fl` = filter by line count. Stack multiple filters to reduce false positives.

### Results

Two subdomains surface with different response sizes:

```
blog        [Status: 200, Size: XXXX]
support     [Status: 200, Size: XXXX]
```

Add both to `/etc/hosts`:

```
10.10.209.47    futurevera.thm blog.futurevera.thm support.futurevera.thm
```

---

## Step 5 — Investigating the Discovered Subdomains

### blog.futurevera.thm

Navigating to `https://blog.futurevera.thm` shows a blog frontend for Futurevera. Source code inspection reveals nothing useful — no flags, no admin panels, no interesting headers.

### support.futurevera.thm

`https://support.futurevera.thm` shows a support/helpdesk page. Again, source code and visible content yield nothing interesting at first glance.

**Dead end on both?** Not quite. The next move is to look at what these subdomains expose at the TLS layer.

---

## Step 6 — SSL Certificate Inspection (The Key Step)

This is where the challenge's core technique comes in. TLS certificates often contain **Subject Alternative Names (SANs)** — a field listing every domain/subdomain the certificate is valid for. Misconfigured or forgotten subdomains frequently get embedded here during cert generation and are never cleaned up.

### Method 1 — Browser Certificate Viewer

Click the padlock in your browser when visiting `https://support.futurevera.thm` → View Certificate → Subject Alternative Names.

### Method 2 — openssl CLI

```bash
echo | openssl s_client -connect support.futurevera.thm:443 2>/dev/null \
  | openssl x509 -noout -text \
  | grep -A2 "Subject Alternative Name"
```

### Method 3 — crt.sh (Passive OSINT)

For real-world engagements, `https://crt.sh/?q=futurevera.thm` would surface all publicly logged certificates for the domain from Certificate Transparency logs — no active scanning needed.

### What We Find

The certificate for `support.futurevera.thm` contains an additional SAN entry that wasn't in our wordlist:

```
secrethelpdesk934752.support.futurevera.thm
```

This is a **nested subdomain** — a subdomain of a subdomain. It was never exposed in DNS, never findable via brute-force (the name is randomly generated), but it was baked into the TLS certificate, which is publicly readable.

This is a classic **subdomain takeover** precondition: a forgotten, hard-to-guess subdomain that's still live but no longer actively maintained.

---

## Step 7 — Accessing the Hidden Subdomain

Add it to `/etc/hosts`:

```
10.10.209.47    secrethelpdesk934752.support.futurevera.thm
```

Navigating to `https://secrethelpdesk934752.support.futurevera.thm` in the browser appears to render the standard Futurevera homepage — seemingly nothing.

But the flag isn't in the page body. It's in the **HTTP response headers**.

```bash
curl -ik https://secrethelpdesk934752.support.futurevera.thm
```

> `-i` = include response headers in output  
> `-k` = skip TLS verification (expired cert)

The flag appears in the response headers:

```
flag: flag{beea0d6edfcee06a59b83fb50ae81b2f}
```

---

## Completion

![TryHackMe Room Completed — vishwakumarv](/images/writeups/tryhackme/takeover.png)

---

## Full Attack Chain Summary

```
Initial Access
      │
      ▼
nmap scan → ports 22, 80, 443 identified
      │
      ▼
Browse https://futurevera.thm → nothing in page/source
      │
      ▼
ffuf VHost fuzzing → blog.futurevera.thm + support.futurevera.thm
      │
      ▼
Inspect SSL cert on support subdomain
      │
      ▼
SAN entry reveals: secrethelpdesk934752.support.futurevera.thm
      │
      ▼
curl -ik → flag in HTTP response headers
```

---

## Why This Attack Class Matters in the Real World

This challenge models **subdomain takeover** — one of the most consistently rewarding vulnerability classes in bug bounty programs.

The typical real-world version works like this:

1. A company creates a subdomain (e.g., `helpdesk.company.com`) pointing to a third-party service (Zendesk, GitHub Pages, Heroku, etc.).
2. They stop using that service but forget to delete the DNS record.
3. An attacker claims the service account the subdomain was pointing to.
4. Now the attacker controls content served at `helpdesk.company.com` — perfect for phishing, cookie theft, or bypassing CSP.

In this room, the vulnerability is slightly different — a **forgotten subdomain embedded in a TLS certificate SAN** — but the principle is the same: infrastructure that's provisioned but not maintained becomes an attacker's asset.

### Subdomain Enumeration Methods — Reference Table

| Method | Tool | When to Use |
|---|---|---|
| VHost fuzzing | `ffuf`, `gobuster vhost` | Active — good for CTFs and scoped engagements |
| DNS brute-force | `dnsx`, `subfinder`, `amass` | Active — discovers DNS-registered subdomains |
| Certificate Transparency | `crt.sh`, `certspotter` | Passive — finds all publicly logged certs |
| SSL cert SAN inspection | `openssl`, browser | Active — reads SANs from live TLS handshake |
| Passive OSINT | VirusTotal, Shodan, Google | Passive — no direct interaction with target |

---

## Tools Reference

| Tool | Command Used | Purpose |
|---|---|---|
| `nmap` | `nmap -sC -sV <IP>` | Port/service discovery |
| `ffuf` | `ffuf -H "Host: FUZZ.domain" -fs <size>` | VHost/subdomain fuzzing |
| `openssl` | `openssl s_client / x509` | TLS certificate inspection |
| `curl` | `curl -ik <url>` | HTTP response + header inspection |
| `/etc/hosts` | `nano /etc/hosts` | Local DNS resolution for lab domains |
| `crt.sh` | Browser — passive OSINT | Certificate transparency log search |

---

*Tags: `subdomain-enumeration` `vhost-fuzzing` `ssl-certificates` `subdomain-takeover` `ffuf` `nmap` `tryhackme` `ctf` `reconnaissance`*