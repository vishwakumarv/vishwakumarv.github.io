---
title: About
icon: fas fa-info-circle
order: 4
---

<style>
/* ── RESET & BASE ── */
#about-root * { box-sizing: border-box; margin: 0; padding: 0; }
#about-root {
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  color: #c9d1d9;
  line-height: 1.7;
}

/* ── GLITCH HEADER ── */
.glitch-wrapper {
  text-align: center;
  padding: 2.5rem 0 1.5rem;
  position: relative;
}
.glitch {
  font-size: clamp(2rem, 6vw, 3.8rem);
  font-weight: 900;
  color: #00d9ff;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05em;
  text-shadow: 0 0 20px rgba(0,217,255,0.5);
}
.glitch::before, .glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
.glitch::before {
  color: #ff003c;
  animation: glitch-top 2.5s infinite linear;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translateX(-3px);
}
.glitch::after {
  color: #00ff9f;
  animation: glitch-bottom 2.5s infinite linear;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translateX(3px);
}
@keyframes glitch-top {
  0%,90%,100% { transform: translateX(-3px); opacity: 1; }
  92% { transform: translateX(4px) skewX(5deg); opacity: 0.8; }
  94% { transform: translateX(-4px); opacity: 1; }
  96% { transform: translateX(3px) skewX(-3deg); opacity: 0.9; }
}
@keyframes glitch-bottom {
  0%,88%,100% { transform: translateX(3px); opacity: 1; }
  90% { transform: translateX(-5px) skewX(-4deg); opacity: 0.7; }
  93% { transform: translateX(5px); opacity: 1; }
  97% { transform: translateX(-3px) skewX(2deg); opacity: 0.9; }
}
.subtitle-typed {
  color: #7ee787;
  font-size: 1rem;
  margin-top: 0.6rem;
  min-height: 1.4em;
}
.cursor-blink {
  display: inline-block;
  width: 9px; height: 1.1em;
  background: #7ee787;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* ── SOCIAL BADGES ── */
.badges {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 0.5rem; margin: 1.5rem 0;
}
.badge-link {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 4px;
  font-size: 0.78rem; font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
  border: 1px solid rgba(255,255,255,0.08);
}
.badge-link:hover { transform: translateY(-2px); box-shadow: 0 4px 18px rgba(0,217,255,0.25); }
.badge-gh   { background: #161b22; color: #e6edf3; }
.badge-li   { background: #0a66c2; color: #fff; }
.badge-htb  { background: #1a1a2e; color: #9fef00; border-color: #9fef00; }
.badge-thm  { background: #212c42; color: #fff; }
.badge-mail { background: #c0392b; color: #fff; }
.badge-bmc  { background: #ffdd00; color: #111; }

/* ── TERMINAL CARD ── */
.terminal {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
}
.terminal-bar {
  background: #161b22;
  padding: 0.55rem 1rem;
  display: flex; align-items: center; gap: 0.5rem;
  border-bottom: 1px solid #30363d;
}
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot-red   { background: #ff5f57; }
.dot-yellow{ background: #febc2e; }
.dot-green { background: #28c840; }
.terminal-title {
  flex: 1; text-align: center; font-size: 0.75rem; color: #6e7681;
}
.terminal-body {
  padding: 1.2rem 1.5rem;
  font-size: 0.88rem;
  line-height: 1.9;
  color: #c9d1d9;
}
.term-prompt { color: #7ee787; }
.term-cmd    { color: #79c0ff; }
.term-key    { color: #79c0ff; min-width: 90px; display: inline-block; }
.term-val    { color: #e6edf3; }
.term-dim    { color: #6e7681; }
.term-cursor-block {
  display: inline-block; width: 9px; height: 1em;
  background: #c9d1d9; vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

/* ── SECTION HEADERS ── */
.section-header {
  display: flex; align-items: center; gap: 0.75rem;
  margin: 2.2rem 0 1rem;
}
.section-header .line {
  flex: 1; height: 1px; background: linear-gradient(90deg, #30363d, transparent);
}
.section-header h2 {
  font-size: 0.8rem; font-weight: 700; letter-spacing: 0.15em;
  color: #00d9ff; text-transform: uppercase; white-space: nowrap;
}
.section-header .tag {
  background: rgba(0,217,255,0.1); border: 1px solid rgba(0,217,255,0.3);
  color: #00d9ff; font-size: 0.7rem; padding: 0.1rem 0.5rem; border-radius: 3px;
}

/* ── DOMAIN GRID ── */
.domain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem; margin: 1rem 0;
}
.domain-card {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 1rem 1.2rem;
  position: relative; overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
.domain-card::before {
  content: '';
  position: absolute; top: 0; left: 0;
  width: 3px; height: 100%;
}
.domain-card.primary::before { background: #00d9ff; }
.domain-card.secondary::before { background: #7ee787; }
.domain-card:hover { border-color: #58a6ff; transform: translateY(-2px); }
.domain-card h3 {
  font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 0.7rem;
}
.domain-card.primary h3 { color: #00d9ff; }
.domain-card.secondary h3 { color: #7ee787; }
.domain-item {
  display: flex; align-items: flex-start; gap: 0.5rem;
  font-size: 0.82rem; margin-bottom: 0.45rem; color: #c9d1d9;
}
.domain-item .di { color: #58a6ff; flex-shrink: 0; }
.domain-item .sub { color: #6e7681; font-size: 0.75rem; }

/* ── SKILL BARS ── */
.skill-category { margin-bottom: 1.2rem; }
.skill-cat-label {
  font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  color: #00d9ff; margin-bottom: 0.6rem;
}
.skill-row {
  display: flex; align-items: center; gap: 0.75rem;
  margin-bottom: 0.45rem; font-size: 0.82rem;
}
.skill-name { min-width: 110px; color: #c9d1d9; }
.skill-bar-bg {
  flex: 1; height: 6px; background: #21262d; border-radius: 3px; overflow: hidden;
}
.skill-bar-fill {
  height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, #00d9ff, #7ee787);
  width: 0;
  transition: width 1.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.skill-pct { color: #6e7681; font-size: 0.75rem; min-width: 34px; text-align: right; }

/* ── PROJECT CARDS ── */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1rem; margin: 1rem 0;
}
.proj-card {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.2rem;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  position: relative; overflow: hidden;
}
.proj-card::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,217,255,0.04), transparent);
  opacity: 0; transition: opacity 0.2s;
}
.proj-card:hover { border-color: #00d9ff; box-shadow: 0 0 20px rgba(0,217,255,0.12); transform: translateY(-3px); }
.proj-card:hover::after { opacity: 1; }
.proj-icon { font-size: 1.5rem; margin-bottom: 0.6rem; }
.proj-name { font-size: 0.92rem; font-weight: 700; color: #e6edf3; margin-bottom: 0.3rem; }
.proj-desc { font-size: 0.78rem; color: #8b949e; line-height: 1.5; margin-bottom: 0.8rem; }
.proj-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; }
.proj-tag {
  font-size: 0.68rem; padding: 0.15rem 0.45rem; border-radius: 3px;
  background: rgba(88,166,255,0.1); border: 1px solid rgba(88,166,255,0.2); color: #58a6ff;
}
.proj-expand { display: none; }
.proj-card.open .proj-expand { display: block; margin-top: 0.8rem; padding-top: 0.8rem; border-top: 1px solid #30363d; font-size: 0.8rem; color: #8b949e; }

/* ── EXPERIENCE TIMELINE ── */
.timeline { position: relative; padding-left: 1.5rem; margin: 1rem 0; }
.timeline::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px; background: linear-gradient(180deg, #00d9ff, #7ee787, #30363d);
}
.tl-item { position: relative; margin-bottom: 1.5rem; }
.tl-dot {
  position: absolute; left: -1.9rem; top: 0.35rem;
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid #00d9ff; background: #0d1117;
}
.tl-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  flex-wrap: wrap; gap: 0.3rem; margin-bottom: 0.3rem;
}
.tl-role { font-size: 0.88rem; font-weight: 700; color: #e6edf3; }
.tl-company { color: #00d9ff; font-size: 0.82rem; }
.tl-period { font-size: 0.72rem; color: #6e7681; }
.tl-points { list-style: none; font-size: 0.8rem; color: #8b949e; }
.tl-points li::before { content: '▸ '; color: #7ee787; }
.tl-points li { margin-bottom: 0.2rem; }

/* ── CTF TABLE ── */
.ctf-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; margin: 1rem 0; }
.ctf-table th {
  text-align: left; padding: 0.5rem 0.75rem;
  color: #00d9ff; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
  border-bottom: 1px solid #30363d;
}
.ctf-table td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #161b22; color: #c9d1d9; vertical-align: top; }
.ctf-table tr:hover td { background: rgba(0,217,255,0.04); }
.ctf-badge {
  display: inline-block; padding: 0.1rem 0.45rem; border-radius: 3px; font-size: 0.7rem;
  background: rgba(126,231,135,0.12); border: 1px solid rgba(126,231,135,0.3); color: #7ee787;
}

/* ── STATS COUNTER ── */
.stats-row {
  display: flex; flex-wrap: wrap; justify-content: center;
  gap: 1rem; margin: 1.5rem 0;
}
.stat-box {
  background: #0d1117; border: 1px solid #30363d; border-radius: 6px;
  padding: 1rem 1.5rem; text-align: center; min-width: 120px;
  transition: border-color 0.2s;
}
.stat-box:hover { border-color: #00d9ff; }
.stat-num { font-size: 2rem; font-weight: 900; color: #00d9ff; display: block; }
.stat-label { font-size: 0.72rem; color: #6e7681; text-transform: uppercase; letter-spacing: 0.1em; }

/* ── MATRIX CANVAS ── */
#matrix-canvas {
  display: block; width: 100%; height: 80px; opacity: 0.35;
  margin: 1.5rem 0 0.5rem; border-radius: 6px;
}

/* ── FOOTER TERMINAL ── */
.footer-term {
  text-align: center; margin-top: 2rem; padding: 1.5rem;
  background: #0d1117; border: 1px solid #30363d; border-radius: 8px;
}
.footer-term p { font-size: 0.85rem; color: #7ee787; }

/* ── SCANLINES OVERLAY ── */
.scanlines {
  pointer-events: none;
  position: fixed; inset: 0; z-index: 9999;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
}
</style>

<div class="scanlines"></div>

<div id="about-root">

<!-- ── GLITCH HEADER ── -->
<div class="glitch-wrapper">
  <div class="glitch" data-text="V VISHWA KUMAR">V VISHWA KUMAR</div>
  <div class="subtitle-typed"><span id="typed-sub"></span><span class="cursor-blink"></span></div>
</div>

<!-- ── SOCIAL BADGES ── -->
<div class="badges">
  <a class="badge-link badge-gh"   href="https://github.com/vishwakumarv">⌥ GitHub</a>
  <a class="badge-link badge-li"   href="https://www.linkedin.com/in/vishwakumarv/">in LinkedIn</a>
  <a class="badge-link badge-htb"  href="https://app.hackthebox.com/users/2569138">⬡ HackTheBox</a>
  <a class="badge-link badge-thm"  href="https://tryhackme.com/p/vkumxr">⚑ TryHackMe</a>
  <a class="badge-link badge-mail" href="mailto:vishwakumarv05@gmail.com">✉ Email</a>
  <a class="badge-link badge-bmc"  href="https://buymeacoffee.com/vishwakumarv">☕ Buy Me Coffee</a>
</div>

<!-- ── TERMINAL WHOAMI ── -->
<div class="terminal">
  <div class="terminal-bar">
    <div class="dot dot-red"></div>
    <div class="dot dot-yellow"></div>
    <div class="dot dot-green"></div>
    <div class="terminal-title">vishwa@kali — ~</div>
  </div>
  <div class="terminal-body">
    <div><span class="term-prompt">vishwa@kali</span><span class="term-dim">:</span><span class="term-cmd">~</span><span class="term-dim">$ </span><span>cat whoami.txt</span></div>
    <br>
    <div><span class="term-key">Name</span><span class="term-dim">  : </span><span class="term-val">V Vishwa Kumar</span></div>
    <div><span class="term-key">Role</span><span class="term-dim">  : </span><span class="term-val">ECE Student → Cybersecurity Researcher</span></div>
    <div><span class="term-key">College</span><span class="term-dim">: </span><span class="term-val">PSG College of Technology</span></div>
    <div><span class="term-key">Focus</span><span class="term-dim"> : </span><span class="term-val">RE · Android Internals · Offensive Security · Embedded</span></div>
    <div><span class="term-key">OS</span><span class="term-dim">    : </span><span class="term-val">Kali Linux / Parrot OS Security</span></div>
    <div><span class="term-key">Motto</span><span class="term-dim"> : </span><span style="color:#f0e68c;">"Most of my work starts with curiosity."</span></div>
    <br>
    <div><span class="term-prompt">vishwa@kali</span><span class="term-dim">:</span><span class="term-cmd">~</span><span class="term-dim">$ </span><span class="term-cursor-block"></span></div>
  </div>
</div>

<!-- ── STATS ── -->
<div class="stats-row">
  <div class="stat-box"><span class="stat-num" data-target="8">0</span><span class="stat-label">CTFs</span></div>
  <div class="stat-box"><span class="stat-num" data-target="3">0</span><span class="stat-label">Internships</span></div>
  <div class="stat-box"><span class="stat-num" data-target="3">0</span><span class="stat-label">Projects</span></div>
  <div class="stat-box"><span class="stat-num" data-target="4">0</span><span class="stat-label">Domains</span></div>
  <div class="stat-box"><span class="stat-num" data-target="10">0</span><span class="stat-label">Tools</span></div>
</div>

<!-- ── BIO ── -->
<div class="section-header">
  <h2>// init</h2><div class="line"></div><span class="tag">about</span>
</div>

<div class="terminal">
  <div class="terminal-bar">
    <div class="dot dot-red"></div><div class="dot dot-yellow"></div><div class="dot dot-green"></div>
    <div class="terminal-title">about.sh</div>
  </div>
  <div class="terminal-body" style="font-size:0.85rem; color:#c9d1d9;">
    Hi — I'm Vishwa, an ECE student obsessed with how systems actually work, and more interestingly, how they break.<br><br>
    My work lives at the intersection of <span style="color:#00d9ff;">offensive security</span>, <span style="color:#7ee787;">reverse engineering</span>, and <span style="color:#f0e68c;">low-level systems</span>. I dig into Android internals, trace malware behavior, instrument binaries with Frida, and occasionally build embedded things that probably shouldn't exist.<br><br>
    Most projects here started as <span style="color:#ffa657;">"I wonder what happens if..."</span> at 2AM — and grew from there.
  </div>
</div>

<!-- ── RESEARCH DOMAINS ── -->
<div class="section-header">
  <h2>// domains</h2><div class="line"></div><span class="tag">research</span>
</div>

<div class="domain-grid">
  <div class="domain-card primary">
    <h3>Primary</h3>
    <div class="domain-item"><span class="di">◈</span><div><div>Reverse Engineering</div><div class="sub">static &amp; dynamic analysis</div></div></div>
    <div class="domain-item"><span class="di">◈</span><div><div>Android Internals</div><div class="sub">ART, DEX, native layers</div></div></div>
    <div class="domain-item"><span class="di">◈</span><div><div>Dynamic Instrumentation</div><div class="sub">Frida, hooking, tracing</div></div></div>
    <div class="domain-item"><span class="di">◈</span><div><div>Malware Analysis</div><div class="sub">behavioral, structural</div></div></div>
  </div>
  <div class="domain-card secondary">
    <h3>Secondary</h3>
    <div class="domain-item"><span class="di" style="color:#7ee787;">◈</span><div><div>Embedded / IoT Security</div><div class="sub">ESP32, firmware, Matter</div></div></div>
    <div class="domain-item"><span class="di" style="color:#7ee787;">◈</span><div><div>AI-Assisted Analysis</div><div class="sub">LLM-augmented RE workflows</div></div></div>
    <div class="domain-item"><span class="di" style="color:#7ee787;">◈</span><div><div>Linux Internals</div><div class="sub">kernel, ELF, syscalls</div></div></div>
    <div class="domain-item"><span class="di" style="color:#7ee787;">◈</span><div><div>CTF Research</div><div class="sub">crypto, forensics, web</div></div></div>
  </div>
</div>

<!-- ── SKILL BARS ── -->
<div class="section-header">
  <h2>// skills</h2><div class="line"></div><span class="tag">toolchain</span>
</div>

<div id="skill-bars">
  <div class="skill-category">
    <div class="skill-cat-label">Analysis</div>
    <div class="skill-row"><span class="skill-name">Ghidra / r2</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="88"></div></div><span class="skill-pct">88%</span></div>
    <div class="skill-row"><span class="skill-name">GDB + pwndbg</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="82"></div></div><span class="skill-pct">82%</span></div>
    <div class="skill-row"><span class="skill-name">apktool / jadx</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="85"></div></div><span class="skill-pct">85%</span></div>
  </div>
  <div class="skill-category">
    <div class="skill-cat-label">Instrumentation</div>
    <div class="skill-row"><span class="skill-name">Frida</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="90"></div></div><span class="skill-pct">90%</span></div>
    <div class="skill-row"><span class="skill-name">objection</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="78"></div></div><span class="skill-pct">78%</span></div>
  </div>
  <div class="skill-category">
    <div class="skill-cat-label">Development</div>
    <div class="skill-row"><span class="skill-name">Python</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="92"></div></div><span class="skill-pct">92%</span></div>
    <div class="skill-row"><span class="skill-name">C</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="75"></div></div><span class="skill-pct">75%</span></div>
    <div class="skill-row"><span class="skill-name">Bash</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="88"></div></div><span class="skill-pct">88%</span></div>
  </div>
  <div class="skill-category">
    <div class="skill-cat-label">Recon & Web</div>
    <div class="skill-row"><span class="skill-name">Burp Suite</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="80"></div></div><span class="skill-pct">80%</span></div>
    <div class="skill-row"><span class="skill-name">Nmap / ffuf</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="85"></div></div><span class="skill-pct">85%</span></div>
    <div class="skill-row"><span class="skill-name">Wireshark</span><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="77"></div></div><span class="skill-pct">77%</span></div>
  </div>
</div>

<!-- ── PROJECTS ── -->
<div class="section-header">
  <h2>// projects</h2><div class="line"></div><span class="tag">click to expand</span>
</div>

<div class="project-grid">
  <div class="proj-card" onclick="this.classList.toggle('open')">
    <div class="proj-icon">🤖</div>
    <div class="proj-name">ReDroid-AI</div>
    <div class="proj-desc">Android RE Assistant — LLM-augmented static analysis pipeline for APK reverse engineering with automated reporting.</div>
    <div class="proj-tags">
      <span class="proj-tag">Android</span><span class="proj-tag">RE</span><span class="proj-tag">LLM</span><span class="proj-tag">Python</span>
    </div>
    <div class="proj-expand">
      ▸ Reverse engineering assistant for Android APKs<br>
      ▸ Automated reporting workflows<br>
      ▸ LLM-augmented static analysis pipeline
    </div>
  </div>
  <div class="proj-card" onclick="this.classList.toggle('open')">
    <div class="proj-icon">🎣</div>
    <div class="proj-name">DEADPIXEL</div>
    <div class="proj-desc">Phishing Simulation Toolkit for security-awareness research in controlled environments. Modular campaign framework.</div>
    <div class="proj-tags">
      <span class="proj-tag">Phishing</span><span class="proj-tag">Red Team</span><span class="proj-tag">Python</span>
    </div>
    <div class="proj-expand">
      ▸ Phishing simulation for controlled environments<br>
      ▸ Built for security-awareness demonstrations<br>
      ▸ Modular, configurable campaign framework
    </div>
  </div>
  <div class="proj-card" onclick="this.classList.toggle('open')">
    <div class="proj-icon">🤖</div>
    <div class="proj-name">PuBOT</div>
    <div class="proj-desc">Raspberry Pi–based autonomous navigation robot. Sensor integration, real-time control, hardware/software boundary work.</div>
    <div class="proj-tags">
      <span class="proj-tag">Embedded</span><span class="proj-tag">Raspberry Pi</span><span class="proj-tag">IoT</span>
    </div>
    <div class="proj-expand">
      ▸ Raspberry Pi–based autonomous navigation<br>
      ▸ Sensor integration and real-time control<br>
      ▸ Hardware/software boundary exploration
    </div>
  </div>
</div>

<!-- ── EXPERIENCE ── -->
<div class="section-header">
  <h2>// experience</h2><div class="line"></div><span class="tag">timeline</span>
</div>

<div class="timeline">
  <div class="tl-item">
    <div class="tl-dot"></div>
    <div class="tl-header">
      <div>
        <div class="tl-role">Offensive Cybersecurity Intern</div>
        <div class="tl-company">🔴 InlighnX Global</div>
      </div>
      <span class="tl-period">2024</span>
    </div>
    <ul class="tl-points">
      <li>Vulnerability assessment and pentesting labs</li>
      <li>Security scripting and automation in Python/Bash</li>
      <li>Recon, enumeration, and hashing workflows</li>
    </ul>
  </div>
  <div class="tl-item">
    <div class="tl-dot" style="border-color:#7ee787;"></div>
    <div class="tl-header">
      <div>
        <div class="tl-role">Machine Learning Intern</div>
        <div class="tl-company" style="color:#7ee787;">🤖 Saiket Systems</div>
      </div>
      <span class="tl-period">2024</span>
    </div>
    <ul class="tl-points">
      <li>Classification &amp; anomaly-detection workflows</li>
      <li>Applied ML on security-relevant datasets</li>
      <li>Preprocessing &amp; model experimentation</li>
    </ul>
  </div>
  <div class="tl-item">
    <div class="tl-dot" style="border-color:#ffa657;"></div>
    <div class="tl-header">
      <div>
        <div class="tl-role">Embedded Systems Intern</div>
        <div class="tl-company" style="color:#ffa657;">🔌 Wimera Systems</div>
      </div>
      <span class="tl-period">2023</span>
    </div>
    <ul class="tl-points">
      <li>ESP32-based IoT and embedded workflows</li>
      <li>Dashboard monitoring and device testing</li>
      <li>Matter protocol &amp; smart-device communication</li>
    </ul>
  </div>
</div>

<!-- ── CTF TABLE ── -->
<div class="section-header">
  <h2>// ctf_log</h2><div class="line"></div><span class="tag">competitions</span>
</div>

<table class="ctf-table">
  <thead>
    <tr><th>Competition</th><th>Category</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>picoCTF (MultiCode, Password Profiler, StegoRSA)</td><td>Crypto / Forensics / Stego</td><td><span class="ctf-badge">✅ Solved</span></td></tr>
    <tr><td>MIRAGE CTF</td><td>OSINT / Forensics</td><td><span class="ctf-badge">✅ Flagged</span></td></tr>
    <tr><td>HackZero CTF (Turla APT series)</td><td>Threat Intel / Malware</td><td><span class="ctf-badge">✅ Completed</span></td></tr>
    <tr><td>DevTrails CTF 2026</td><td>Docker / Web / Misc</td><td><span class="ctf-badge">✅ All 5 flags</span></td></tr>
    <tr><td>Bypass CTF 2025</td><td>Multi-category</td><td><span class="ctf-badge">✅ Participated</span></td></tr>
    <tr><td>Yukthi CTF 2.0</td><td>Multi-category</td><td><span class="ctf-badge">✅ Participated</span></td></tr>
    <tr><td>BlockChain CTF</td><td>Blockchain / Web3</td><td><span class="ctf-badge">✅ Participated</span></td></tr>
    <tr><td>Vibe Hack</td><td>Multi-category</td><td><span class="ctf-badge">✅ Participated</span></td></tr>
  </tbody>
</table>

<p style="font-size:0.78rem; color:#6e7681; margin-top:0.5rem;">
  → Full writeups: <a href="/tags/" style="color:#58a6ff;">browse by tag</a> or check <a href="/archives/" style="color:#58a6ff;">archives</a>
</p>

<!-- ── MATRIX RAIN ── -->
<div class="section-header">
  <h2>// system.noise</h2><div class="line"></div>
</div>
<canvas id="matrix-canvas"></canvas>

<!-- ── FOOTER ── -->
<div class="footer-term">
  <p><span style="color:#6e7681;">[vishwa@kali ~]$ </span>echo "Now go break something."</p>
  <p style="margin-top:0.4rem; color:#e6edf3;">Now go break something.</p>
  <p style="margin-top:0.8rem;">
    <a href="https://buymeacoffee.com/vishwakumarv" style="color:#ffdd00; text-decoration:none; font-size:0.82rem;">☕ If a writeup helped you pop a shell — buy me a coffee</a>
  </p>
</div>

</div><!-- /#about-root -->

<script>
(function(){

/* ── TYPED SUBTITLE ── */
const lines = [
  "Breaking systems to understand them.",
  "RE | Android | Malware | Embedded | Linux",
  "ECE Student → Cybersecurity Researcher",
  "sudo make me a sandwich"
];
let li = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-sub');
function typeLoop(){
  const cur = lines[li];
  if(!deleting){
    el.textContent = cur.slice(0, ++ci);
    if(ci === cur.length){ deleting = true; setTimeout(typeLoop, 1800); return; }
  } else {
    el.textContent = cur.slice(0, --ci);
    if(ci === 0){ deleting = false; li = (li+1) % lines.length; setTimeout(typeLoop, 400); return; }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

/* ── STAT COUNTERS ── */
function animateCounters(){
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = +el.dataset.target;
    let cur = 0;
    const step = Math.ceil(target / 30);
    const t = setInterval(()=>{
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if(cur >= target) clearInterval(t);
    }, 40);
  });
}

/* ── SKILL BARS ── */
function animateSkills(){
  document.querySelectorAll('.skill-bar-fill').forEach(el => {
    el.style.width = el.dataset.pct + '%';
  });
}

/* ── INTERSECTION OBSERVER ── */
const statsEl = document.querySelector('.stats-row');
const skillEl = document.getElementById('skill-bars');
let statsTriggered = false, skillsTriggered = false;
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.target === statsEl && e.isIntersecting && !statsTriggered){
      statsTriggered = true; animateCounters();
    }
    if(e.target === skillEl && e.isIntersecting && !skillsTriggered){
      skillsTriggered = true; setTimeout(animateSkills, 200);
    }
  });
}, { threshold: 0.2 });
if(statsEl) io.observe(statsEl);
if(skillEl) io.observe(skillEl);

/* ── MATRIX RAIN ── */
const canvas = document.getElementById('matrix-canvas');
if(canvas){
  const ctx = canvas.getContext('2d');
  function resizeCanvas(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight || 80;
  }
  resizeCanvas();
  const cols = Math.floor(canvas.width / 14);
  const drops = Array(cols).fill(1);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ0123456789@#$%&';
  function drawMatrix(){
    ctx.fillStyle = 'rgba(13,17,23,0.18)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#00d9ff';
    ctx.font = '12px "JetBrains Mono", monospace';
    drops.forEach((y,i)=>{
      const char = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillStyle = Math.random() > 0.9 ? '#ffffff' : '#00d9ff';
      ctx.fillText(char, i*14, y*14);
      if(y*14 > canvas.height && Math.random() > 0.95) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(drawMatrix, 60);
  window.addEventListener('resize', resizeCanvas);
}

})();
</script>
