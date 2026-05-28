---
title: About
icon: fas fa-info-circle
order: 4
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

#ab {
  --bg: #0a0a0a;
  --surface: #111111;
  --border: #1f1f1f;
  --border-hover: #2e2e2e;
  --fg: #f0f0f0;
  --fg-2: #888;
  --fg-3: #444;
  --green: #b8f53a;
  --green-dim: rgba(184,245,58,0.08);
  font-family: 'Space Grotesk', sans-serif;
  color: var(--fg);
  max-width: 720px;
  margin: 2.5rem auto;
  padding: 0 1.5rem 4rem;
}

#ab * { box-sizing: border-box; margin: 0; padding: 0; }
#ab a { color: inherit; text-decoration: none; }

/* ── HERO ── */
.ab-hero {
  padding: 2.5rem 0 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
}

.ab-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--green);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.ab-name {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--fg);
  margin-bottom: 0.9rem;
}

.ab-bio {
  font-size: 0.95rem;
  color: var(--fg-2);
  line-height: 1.75;
  max-width: 540px;
  font-weight: 300;
}

.ab-bio b { color: var(--fg); font-weight: 500; }

.ab-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.5rem;
}

.ab-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  color: var(--fg-2);
  border: 1px solid var(--border);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  transition: all 0.2s;
}

.ab-link:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-dim);
}

/* ── SECTION ── */
.ab-sec {
  margin-bottom: 2.5rem;
}

.ab-sec-head {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fg-3);
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.ab-sec-head::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ── INFO GRID ── */
.ab-info {
  display: grid;
  grid-template-columns: 90px 1fr;
  row-gap: 0.55rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
}

.ab-info-k { color: var(--fg-3); }
.ab-info-v { color: var(--fg-2); }
.ab-info-v a { color: var(--green); }
.ab-info-v a:hover { text-decoration: underline; }

/* ── DOMAIN CARDS ── */
.ab-domains {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.6rem;
}

.ab-domain {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  color: var(--fg-2);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: border-color 0.2s, color 0.2s;
}

.ab-domain:hover {
  border-color: var(--border-hover);
  color: var(--fg);
}

.ab-domain-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}

/* ── TOOLS ── */
.ab-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.ab-tool {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--fg-2);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.3rem 0.65rem;
  border-radius: 4px;
  transition: all 0.15s;
}

.ab-tool:hover {
  color: var(--green);
  border-color: var(--green);
  background: var(--green-dim);
}

/* ── EXPERIENCE ── */
.ab-exp-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.2rem 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}

.ab-exp-item:first-child { padding-top: 0; }
.ab-exp-item:last-child { border-bottom: none; }

.ab-exp-role {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--fg);
}

.ab-exp-co {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--green);
  margin-top: 0.2rem;
}

.ab-exp-year {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--fg-3);
  text-align: right;
  padding-top: 0.15rem;
}

.ab-exp-pts {
  grid-column: 1 / -1;
  list-style: none;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.ab-exp-pts li {
  font-size: 0.8rem;
  color: var(--fg-2);
  font-weight: 300;
  padding-left: 1rem;
  position: relative;
}

.ab-exp-pts li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: var(--green);
}

/* ── CTF ── */
.ab-ctf-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--border);
  gap: 1rem;
  flex-wrap: wrap;
}

.ab-ctf-item:last-child { border-bottom: none; }

.ab-ctf-name {
  font-size: 0.85rem;
  color: var(--fg);
  font-weight: 400;
}

.ab-ctf-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.ab-ctf-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--fg-3);
}

.ab-ctf-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--green);
  border: 1px solid rgba(184,245,58,0.3);
  background: var(--green-dim);
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
}

/* ── PROJECTS ── */
.ab-projects {
  display: grid;
  gap: 0.6rem;
}

.ab-proj {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.1rem 1.25rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.3rem 1rem;
  align-items: start;
  transition: border-color 0.2s;
}

.ab-proj:hover { border-color: var(--border-hover); }

.ab-proj-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--fg);
}

.ab-proj-desc {
  grid-column: 1 / -1;
  font-size: 0.8rem;
  color: var(--fg-2);
  font-weight: 300;
  line-height: 1.6;
  margin-top: 0.2rem;
}

.ab-proj-tags {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.6rem;
}

.ab-proj-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: var(--fg-3);
  border: 1px solid var(--border);
  padding: 0.15rem 0.45rem;
  border-radius: 3px;
}

/* ── FOOTER ── */
.ab-footer {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.ab-footer-left {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--fg-3);
}

.ab-footer-left span { color: var(--green); }

.ab-footer-right {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--fg-3);
}

.ab-footer-right a:hover { color: var(--green); }
</style>

<div id="ab">

  <!-- HERO -->
  <div class="ab-hero">
    <div class="ab-eyebrow">security researcher · coimbatore, india</div>
    <div class="ab-name">V Vishwa Kumar</div>
    <p class="ab-bio">
      ECE student obsessed with how systems actually work — and more interestingly, how they break.
      I work at the intersection of <b>reverse engineering</b>, <b>offensive security</b>, and <b>low-level systems</b>.
      Android internals, malware behavior, Frida instrumentation, embedded things that probably shouldn't exist.
      Most of it started as <em>"I wonder what happens if..."</em> at 2AM.
    </p>
    <div class="ab-links">
      <a class="ab-link" href="https://github.com/vishwakumarv">GitHub</a>
      <a class="ab-link" href="https://www.linkedin.com/in/vishwakumarv/">LinkedIn</a>
      <a class="ab-link" href="https://app.hackthebox.com/users/2569138">HackTheBox</a>
      <a class="ab-link" href="https://tryhackme.com/p/vkumxr">TryHackMe</a>
      <a class="ab-link" href="mailto:vishwakumarv05@gmail.com">Email</a>
      <a class="ab-link" href="https://buymeacoffee.com/vishwakumarv">Buy Me a Coffee</a>
    </div>
  </div>

  <!-- INFO -->
  <div class="ab-sec">
    <div class="ab-sec-head">info</div>
    <div class="ab-info">
      <span class="ab-info-k">college</span>  <span class="ab-info-v">PSG College of Technology, Coimbatore</span>
      <span class="ab-info-k">degree</span>   <span class="ab-info-v">B.E. Electronics & Communication Engineering</span>
      <span class="ab-info-k">year</span>     <span class="ab-info-v">3rd year</span>
      <span class="ab-info-k">os</span>       <span class="ab-info-v">Kali Linux / Parrot OS Security</span>
      <span class="ab-info-k">blog</span>     <span class="ab-info-v"><a href="https://vkumxr.github.io">vkumxr.github.io</a></span>
    </div>
  </div>

  <!-- DOMAINS -->
  <div class="ab-sec">
    <div class="ab-sec-head">domains</div>
    <div class="ab-domains">
      <div class="ab-domain"><span class="ab-domain-dot"></span>Reverse Engineering</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Android Internals</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Malware Analysis</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Dynamic Instrumentation</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Offensive Security</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Embedded / IoT</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>Linux Internals</div>
      <div class="ab-domain"><span class="ab-domain-dot"></span>CTF Research</div>
    </div>
  </div>

  <!-- TOOLS -->
  <div class="ab-sec">
    <div class="ab-sec-head">toolchain</div>
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

  <!-- PROJECTS -->
  <div class="ab-sec">
    <div class="ab-sec-head">projects</div>
    <div class="ab-projects">
      <div class="ab-proj">
        <div class="ab-proj-name">ReDroid-AI</div>
        <div class="ab-proj-desc">LLM-augmented static analysis pipeline for Android APK reverse engineering with automated reporting.</div>
        <div class="ab-proj-tags">
          <span class="ab-proj-tag">Android</span>
          <span class="ab-proj-tag">RE</span>
          <span class="ab-proj-tag">LLM</span>
          <span class="ab-proj-tag">Python</span>
        </div>
      </div>
      <div class="ab-proj">
        <div class="ab-proj-name">DEADPIXEL</div>
        <div class="ab-proj-desc">Modular phishing simulation toolkit for security-awareness research in controlled environments.</div>
        <div class="ab-proj-tags">
          <span class="ab-proj-tag">Red Team</span>
          <span class="ab-proj-tag">Phishing</span>
          <span class="ab-proj-tag">Python</span>
        </div>
      </div>
      <div class="ab-proj">
        <div class="ab-proj-name">PuBOT</div>
        <div class="ab-proj-desc">Raspberry Pi–based autonomous navigation robot. Sensor integration, real-time control, hardware/software boundary work.</div>
        <div class="ab-proj-tags">
          <span class="ab-proj-tag">Embedded</span>
          <span class="ab-proj-tag">Raspberry Pi</span>
          <span class="ab-proj-tag">IoT</span>
        </div>
      </div>
    </div>
  </div>

  <!-- EXPERIENCE -->
  <div class="ab-sec">
    <div class="ab-sec-head">experience</div>
    <div class="ab-exp-item">
      <div>
        <div class="ab-exp-role">Offensive Cybersecurity Intern</div>
        <div class="ab-exp-co">InlighnX Global</div>
      </div>
      <div class="ab-exp-year">2024</div>
      <ul class="ab-exp-pts">
        <li>Vulnerability assessment and pentesting labs</li>
        <li>Security scripting and automation in Python / Bash</li>
        <li>Recon, enumeration, and hashing workflows</li>
      </ul>
    </div>
    <div class="ab-exp-item">
      <div>
        <div class="ab-exp-role">Machine Learning Intern</div>
        <div class="ab-exp-co">Saiket Systems</div>
      </div>
      <div class="ab-exp-year">2024</div>
      <ul class="ab-exp-pts">
        <li>Classification & anomaly-detection workflows</li>
        <li>Applied ML on security-relevant datasets</li>
        <li>Preprocessing & model experimentation</li>
      </ul>
    </div>
    <div class="ab-exp-item">
      <div>
        <div class="ab-exp-role">Embedded Systems Intern</div>
        <div class="ab-exp-co">Wimera Systems</div>
      </div>
      <div class="ab-exp-year">2023</div>
      <ul class="ab-exp-pts">
        <li>ESP32-based IoT and embedded workflows</li>
        <li>Dashboard monitoring and device testing</li>
        <li>Matter protocol & smart-device communication</li>
      </ul>
    </div>
  </div>

  <!-- CTF LOG -->
  <div class="ab-sec">
    <div class="ab-sec-head">ctf log</div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">picoCTF — MultiCode, Password Profiler, StegoRSA</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Crypto · Forensics · Stego</span><span class="ab-ctf-badge">solved</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">MIRAGE CTF</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">OSINT · Forensics</span><span class="ab-ctf-badge">flagged</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">HackZero CTF — Turla APT series</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Threat Intel · Malware</span><span class="ab-ctf-badge">completed</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">DevTrails CTF 2026</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Docker · Web · Misc</span><span class="ab-ctf-badge">all 5 flags</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">Bypass CTF 2025</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Multi-category</span><span class="ab-ctf-badge">participated</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">Yukthi CTF 2.0</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Multi-category</span><span class="ab-ctf-badge">participated</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">BlockChain CTF</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Blockchain · Web3</span><span class="ab-ctf-badge">participated</span></div>
    </div>
    <div class="ab-ctf-item">
      <span class="ab-ctf-name">Vibe Hack</span>
      <div class="ab-ctf-meta"><span class="ab-ctf-cat">Multi-category</span><span class="ab-ctf-badge">participated</span></div>
    </div>
  </div>

  <!-- FOOTER -->
  <div class="ab-footer">
    <div class="ab-footer-left">
      <span>$</span> echo "Now go break something."
    </div>
    <div class="ab-footer-right">
      <a href="mailto:vishwakumarv05@gmail.com">vishwakumarv05@gmail.com</a>
    </div>
  </div>

</div>
