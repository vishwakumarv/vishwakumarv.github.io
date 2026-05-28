---
title: About
icon: fas fa-info-circle
order: 4
---

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap');

#about {
  --fg: #e8e8e8;
  --fg-dim: #888;
  --fg-mute: #444;
  --accent: #c8f060;
  --border: #1e1e1e;
  --bg-card: #0e0e0e;
  font-family: 'DM Sans', sans-serif;
  color: var(--fg);
  max-width: 680px;
  margin: 3rem auto;
  padding: 0 1.25rem;
}

#about * { box-sizing: border-box; margin: 0; padding: 0; }

/* HEADER */
.ab-name {
  font-family: 'DM Mono', monospace;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--fg);
  line-height: 1.1;
}
.ab-tag {
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  color: var(--accent);
  margin-top: 0.5rem;
  letter-spacing: 0.04em;
}
.ab-header {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
}

/* LINKS ROW */
.ab-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}
.ab-link {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--fg-dim);
  text-decoration: none;
  border: 1px solid var(--border);
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
  transition: color 0.15s, border-color 0.15s;
  letter-spacing: 0.04em;
}
.ab-link:hover { color: var(--accent); border-color: var(--accent); }

/* SECTIONS */
.ab-section { margin-bottom: 2.5rem; }
.ab-label {
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  color: var(--fg-mute);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.ab-label::before { content: '//  '; color: var(--accent); }

/* BIO */
.ab-bio {
  font-size: 0.92rem;
  color: var(--fg-dim);
  line-height: 1.8;
  font-weight: 300;
}
.ab-bio strong { color: var(--fg); font-weight: 400; }

/* META TABLE */
.ab-meta {
  display: grid;
  grid-template-columns: 100px 1fr;
  row-gap: 0.6rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
}
.ab-meta-key { color: var(--fg-mute); }
.ab-meta-val { color: var(--fg-dim); }
.ab-meta-val a { color: var(--fg-dim); text-decoration: none; }
.ab-meta-val a:hover { color: var(--accent); }

/* DOMAINS */
.ab-domains {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 2rem;
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
}
.ab-domain-item { color: var(--fg-dim); }
.ab-domain-item::before { content: '→ '; color: var(--accent); }

/* TOOLS */
.ab-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ab-tool {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--fg-dim);
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.25rem 0.6rem;
  border-radius: 2px;
}

/* EXPERIENCE */
.ab-exp { margin-bottom: 1.25rem; }
.ab-exp-role {
  font-size: 0.88rem;
  color: var(--fg);
  font-weight: 400;
}
.ab-exp-where {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--accent);
  margin-top: 0.15rem;
  letter-spacing: 0.04em;
}
.ab-exp-when {
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  color: var(--fg-mute);
  margin-top: 0.1rem;
}
.ab-exp-pts {
  list-style: none;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--fg-dim);
  font-weight: 300;
  line-height: 1.7;
}
.ab-exp-pts li::before { content: '·  '; }
.ab-exp + .ab-exp { padding-top: 1.25rem; border-top: 1px solid var(--border); }

/* CTF */
.ab-ctf-list {
  list-style: none;
  font-family: 'DM Mono', monospace;
  font-size: 0.78rem;
  display: grid;
  gap: 0.5rem;
}
.ab-ctf-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: var(--fg-dim);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 0.3rem;
}
.ab-ctf-list li:last-child { border-bottom: none; }
.ab-ctf-name { color: var(--fg); }
.ab-ctf-cat { color: var(--fg-mute); font-size: 0.68rem; }

/* FOOTER */
.ab-footer {
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--fg-mute);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.ab-footer a { color: var(--fg-mute); text-decoration: none; }
.ab-footer a:hover { color: var(--accent); }
</style>

<div id="about">

  <div class="ab-header">
    <div class="ab-name">V Vishwa Kumar</div>
    <div class="ab-tag">ECE Student → Cybersecurity Researcher · PSG College of Technology</div>
    <div class="ab-links">
      <a class="ab-link" href="https://github.com/vishwakumarv">GitHub</a>
      <a class="ab-link" href="https://www.linkedin.com/in/vishwakumarv/">LinkedIn</a>
      <a class="ab-link" href="https://app.hackthebox.com/users/2569138">HackTheBox</a>
      <a class="ab-link" href="https://tryhackme.com/p/vkumxr">TryHackMe</a>
      <a class="ab-link" href="mailto:vishwakumarv05@gmail.com">Email</a>
      <a class="ab-link" href="https://buymeacoffee.com/vishwakumarv">Buy Me Coffee</a>
    </div>
  </div>

  <div class="ab-section">
    <div class="ab-label">about</div>
    <p class="ab-bio">
      I'm Vishwa — an ECE student who cares more about <strong>how systems break</strong> than how they're built.
      My work sits at the intersection of <strong>offensive security</strong>, <strong>reverse engineering</strong>, and <strong>low-level systems</strong>.
      I dig into Android internals, trace malware behavior, instrument binaries with Frida, and occasionally build embedded things that probably shouldn't exist.
      Most projects here started as <em>"I wonder what happens if..."</em> at 2AM.
    </p>
  </div>

  <div class="ab-section">
    <div class="ab-label">info</div>
    <div class="ab-meta">
      <span class="ab-meta-key">college</span>   <span class="ab-meta-val">PSG College of Technology, Coimbatore</span>
      <span class="ab-meta-key">degree</span>    <span class="ab-meta-val">B.E. Electronics & Communication</span>
      <span class="ab-meta-key">year</span>      <span class="ab-meta-val">3rd year</span>
      <span class="ab-meta-key">os</span>        <span class="ab-meta-val">Kali Linux / Parrot OS Security</span>
      <span class="ab-meta-key">blog</span>      <span class="ab-meta-val"><a href="https://vkumxr.github.io">vkumxr.github.io</a></span>
    </div>
  </div>

  <div class="ab-section">
    <div class="ab-label">domains</div>
    <div class="ab-domains">
      <span class="ab-domain-item">Reverse Engineering</span>
      <span class="ab-domain-item">Android Internals</span>
      <span class="ab-domain-item">Malware Analysis</span>
      <span class="ab-domain-item">Dynamic Instrumentation</span>
      <span class="ab-domain-item">Offensive Security</span>
      <span class="ab-domain-item">Embedded / IoT</span>
      <span class="ab-domain-item">Linux Internals</span>
      <span class="ab-domain-item">CTF Research</span>
    </div>
  </div>

  <div class="ab-section">
    <div class="ab-label">tools</div>
    <div class="ab-tools">
      <span class="ab-tool">Ghidra</span>
      <span class="ab-tool">radare2</span>
      <span class="ab-tool">GDB + pwndbg</span>
      <span class="ab-tool">Frida</span>
      <span class="ab-tool">objection</span>
      <span class="ab-tool">apktool / jadx</span>
      <span class="ab-tool">Burp Suite</span>
      <span class="ab-tool">Nmap</span>
      <span class="ab-tool">Wireshark</span>
      <span class="ab-tool">Volatility</span>
      <span class="ab-tool">YARA</span>
      <span class="ab-tool">Metasploit</span>
    </div>
  </div>

  <div class="ab-section">
    <div class="ab-label">experience</div>
    <div class="ab-exp">
      <div class="ab-exp-role">Offensive Cybersecurity Intern</div>
      <div class="ab-exp-where">InlighnX Global</div>
      <div class="ab-exp-when">2024</div>
      <ul class="ab-exp-pts">
        <li>Vulnerability assessment and pentesting labs</li>
        <li>Security scripting and automation in Python / Bash</li>
        <li>Recon, enumeration, and hashing workflows</li>
      </ul>
    </div>
    <div class="ab-exp">
      <div class="ab-exp-role">Machine Learning Intern</div>
      <div class="ab-exp-where">Saiket Systems</div>
      <div class="ab-exp-when">2024</div>
      <ul class="ab-exp-pts">
        <li>Classification & anomaly-detection workflows</li>
        <li>Applied ML on security-relevant datasets</li>
        <li>Preprocessing & model experimentation</li>
      </ul>
    </div>
    <div class="ab-exp">
      <div class="ab-exp-role">Embedded Systems Intern</div>
      <div class="ab-exp-where">Wimera Systems</div>
      <div class="ab-exp-when">2023</div>
      <ul class="ab-exp-pts">
        <li>ESP32-based IoT and embedded workflows</li>
        <li>Dashboard monitoring and device testing</li>
        <li>Matter protocol & smart-device communication</li>
      </ul>
    </div>
  </div>

  <div class="ab-section">
    <div class="ab-label">ctf log</div>
    <ul class="ab-ctf-list">
      <li><span class="ab-ctf-name">picoCTF</span><span class="ab-ctf-cat">Crypto · Forensics · Stego</span></li>
      <li><span class="ab-ctf-name">MIRAGE CTF</span><span class="ab-ctf-cat">OSINT · Forensics</span></li>
      <li><span class="ab-ctf-name">HackZero CTF — Turla APT series</span><span class="ab-ctf-cat">Threat Intel · Malware</span></li>
      <li><span class="ab-ctf-name">DevTrails CTF 2026</span><span class="ab-ctf-cat">Docker · Web · Misc</span></li>
      <li><span class="ab-ctf-name">Bypass CTF 2025</span><span class="ab-ctf-cat">Multi-category</span></li>
      <li><span class="ab-ctf-name">Yukthi CTF 2.0</span><span class="ab-ctf-cat">Multi-category</span></li>
      <li><span class="ab-ctf-name">BlockChain CTF</span><span class="ab-ctf-cat">Blockchain · Web3</span></li>
      <li><span class="ab-ctf-name">Vibe Hack</span><span class="ab-ctf-cat">Multi-category</span></li>
    </ul>
  </div>

  <div class="ab-footer">
    <span>vkumxr.github.io · 2026</span>
    <span><a href="mailto:vishwakumarv05@gmail.com">vishwakumarv05@gmail.com</a></span>
  </div>

</div>
