// ================= APP.JS =================
document.addEventListener('DOMContentLoaded', () => {

  // ===== PROFILE =====
  document.getElementById('profilePic').src = 'https://i.imgur.com/HvU8vaC.jpeg';
  document.querySelector('.display-name').textContent = '𝐀𝐋𝐈𝐅 𝐇𝐎𝐒𝐒𝐎𝐍';

  // Social Links
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-telegram-plane', url: '#' },
    { icon: 'fab fa-whatsapp', url: '#' },
    { icon: 'fab fa-tiktok', url: '#' },
    { icon: 'fab fa-github', url: '#' }
  ];
  const socialContainer = document.querySelector('.social');
  socialLinks.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url; a.target = "_blank";
    a.innerHTML = `<i class="${s.icon}"></i>`;
    socialContainer.appendChild(a);
  });

  // ===== INTRO =====
  const introText = [
    "Hey 👋🏽",
    "I'm Alif Hosson",
    "Welcome to my profile",
    "Developer & Cyber Expert"
  ];
  const introContainer = document.getElementById('introText');
  introContainer.innerHTML = introText.map(line => `<span>${line}</span><br>`).join('');

  // ===== SKILLS =====
  const skillsData = [
    { icon: 'fab fa-js', project: 'Project A: E-commerce site' },
    { icon: 'fab fa-node-js', project: 'Node API: Messenger bot' },
    { icon: 'fab fa-html5', project: 'Web Developing' },
    { icon: 'fab fa-react', project: 'React Portfolio Website' },
    { icon: 'fab fa-python', project: 'ML Script Automation' },
    { icon: 'fab fa-php', project: 'PHP CMS Backend' }
  ];
  const skillsContainer = document.getElementById('skillsContainer');
  skillsData.forEach(s => {
    const i = document.createElement('i');
    i.className = s.icon;
    i.dataset.project = s.project;
    i.title = s.project;
    skillsContainer.appendChild(i);
  });

  // Project Hover
  const project1 = document.getElementById('projectBox').querySelector('p');
  skillsContainer.querySelectorAll('i').forEach(skill => {
    skill.addEventListener('mouseenter', () => project1.textContent = skill.dataset.project);
    skill.addEventListener('mouseleave', () => project1.textContent = "Hover over a skill to see project details here.");
  });

  // ===== CLOCK (Bangladesh Time) =====
  function updateClock(){
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bst = new Date(utc + 6*60*60*1000);
    let h = bst.getHours();
    const m = String(bst.getMinutes()).padStart(2,'0');
    const s = String(bst.getSeconds()).padStart(2,'0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    document.getElementById('clock').textContent = `${String(h).padStart(2,'0')}:${m}:${s} ${ampm}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ===== TERMINAL EFFECT =====
  const terminalOutput = document.getElementById("terminalOutput");
  const fakeCode = [
    "Initializing system...",
    "Loading modules...",
    "Accessing secure server...",
    "Decrypting data...",
    "Connection established ✅",
    "Running scripts...",
    "Monitoring network traffic...",
    "Process completed!"
  ];
  let i = 0;
  function typeCode() {
    if(i < fakeCode.length) {
      terminalOutput.textContent += fakeCode[i] + "\n";
      i++;
      setTimeout(typeCode, 800);
    } else {
      setTimeout(() => {
        terminalOutput.textContent = "";
        i = 0;
        typeCode();
      }, 3000);
    }
  }
  typeCode();

  // ===== SECRET REVEAL =====
  function revealSecret(){
    const box = document.getElementById("secretBox");
    const messages = [
      "I am Alif, Cyber Expert 😎",
      "Coding is my superpower 💻",
      "Hack the planet 🌐",
      "Security first 🔒"
    ];
    box.textContent = messages[Math.floor(Math.random()*messages.length)];
  }
  window.revealSecret = revealSecret; // make accessible globally for button

  // ===== NETWORK BACKGROUND =====
  const netCanvas = document.getElementById("networkCanvas");
  netCanvas.width = window.innerWidth;
  netCanvas.height = window.innerHeight;
  const netCtx = netCanvas.getContext("2d");
  const nodes = Array.from({length:50}, () => ({
    x: Math.random()*netCanvas.width,
    y: Math.random()*netCanvas.height,
    vx: (Math.random()-0.5)*1.5,
    vy: (Math.random()-0.5)*1.5
  }));
  function drawNetwork() {
    netCtx.clearRect(0,0,netCanvas.width,netCanvas.height);
    nodes.forEach(n=>{
      n.x += n.vx;
      n.y += n.vy;
      if(n.x<0 || n.x>netCanvas.width) n.vx*=-1;
      if(n.y<0 || n.y>netCanvas.height) n.vy*=-1;
      netCtx.fillStyle = "#0ff";
      netCtx.beginPath();
      netCtx.arc(n.x,n.y,3,0,Math.PI*2);
      netCtx.fill();
      nodes.forEach(n2=>{
        const dx=n.x-n2.x, dy=n.y-n2.y;
        if(Math.sqrt(dx*dx+dy*dy)<60){
          netCtx.strokeStyle="rgba(0,255,255,0.2)";
          netCtx.beginPath();
          netCtx.moveTo(n.x,n.y);
          netCtx.lineTo(n2.x,n2.y);
          netCtx.stroke();
        }
      });
    });
    requestAnimationFrame(drawNetwork);
  }
  drawNetwork();
  window.addEventListener("resize", ()=>{
    netCanvas.width = window.innerWidth;
    netCanvas.height = window.innerHeight;
  });

  // ===== FLOWER CLICK EFFECT =====
  document.addEventListener("click", e => {
    const flowers = ["🌻","🤩","😚","😘","🥰","🌸","💖"];
    const f = document.createElement("div");
    f.classList.add("flower");
    Object.assign(f.style, {
      left: e.pageX + "px",
      top: e.pageY + "px",
      fontSize: (16 + Math.random() * 16) + "px",
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      position: "fixed",
      animation: "fall 1.2s linear forwards",
      pointerEvents: "none",
      zIndex: 9999
    });
    f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  });

  // ===== SCROLL PROGRESS BAR =====
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = scrollPercent + "%";
  });

  // ===== SNOW EFFECT =====
  function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.innerHTML = "❄️";
    Object.assign(snow.style, {
      left: Math.random() * window.innerWidth + "px",
      top: "-10px",
      fontSize: (12 + Math.random() * 18) + "px",
      color: `hsl(${Math.random() * 360}, 100%, 80%)`,
      position: "fixed",
      animation: `snowfall ${3 + Math.random() * 3}s linear forwards`,
      pointerEvents: "none",
      zIndex: 9999
    });
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 6000);
  }
  setInterval(createSnow, 400);

  // ===== ABOUT ME =====
  document.querySelector('.card p').innerHTML = `
Hi, I'm <strong>Alif Hosson</strong> 🌟, a passionate developer & cyber expert.
I love creating <em>web applications</em>, exploring <em>cybersecurity</em>,
and sharing knowledge. My goal is to <strong>innovate, inspire, and illuminate</strong> 💻✨`;

  // Badges
  const badges = [
    { icon: 'fas fa-code', text: '50+ Projects' },
    { icon: 'fas fa-shield-alt', text: 'Cybersecurity' },
    { icon: 'fas fa-globe', text: 'Open Source' },
    { icon: 'fas fa-rocket', text: 'Always Learning' }
  ];
  const badgesContainer = document.getElementById('badgesContainer');
  badges.forEach(b => {
    const div = document.createElement('div');
    div.className = 'badge';
    div.innerHTML = `<i class="${b.icon}"></i> ${b.text}`;
    badgesContainer.appendChild(div);
  });

  // Timeline
  const timelineEvents = [
    { year: '2019', desc: 'Started coding HTML & CSS' },
    { year: '2020', desc: 'Learned JS & Node.js' },
    { year: '2021', desc: 'Python & Cybersecurity' },
    { year: '2022', desc: 'Full-stack apps & open source' }
  ];
  const timelineContainer = document.getElementById('timelineContainer');
  timelineEvents.forEach(t => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `<strong>${t.year}:</strong> ${t.desc}`;
    timelineContainer.appendChild(div);
  });

  // Hobbies
  const hobbies = [
    { icon: 'fas fa-gamepad', text: 'Gaming' },
    { icon: 'fas fa-music', text: 'Music' },
    { icon: 'fas fa-book', text: 'Reading' },
    { icon: 'fas fa-rocket', text: 'Tech Innovations' }
  ];
  const hobbiesContainer = document.getElementById('hobbiesContainer');
  hobbies.forEach(h => {
    const div = document.createElement('div');
    div.className = 'hobby';
    div.innerHTML = `<i class="${h.icon}"></i> ${h.text}`;
    hobbiesContainer.appendChild(div);
  });

  // ===== SERVICES =====
  const services = [
    { icon: 'fas fa-code', text: 'Developing' },
    { icon: 'fas fa-shield-alt', text: 'Cyber Security' },
    { icon: 'fas fa-robot', text: 'Bot Make' },
    { icon: 'fas fa-plug', text: 'API Make' }
  ];
  const serviceContainer = document.querySelector('.service-single-box');
  services.forEach(s => {
    const div = document.createElement('div');
    div.className = 'service-item';
    div.innerHTML = `<i class="${s.icon}"></i><span>${s.text}</span>`;
    serviceContainer.appendChild(div);
  });

  // ===== MESSENGER SEND =====
  const sendBtn = document.getElementById('sendBtn');
  const msgInput = document.getElementById('msgInput');
  function sendMessage() {
    const msg = msgInput.value.trim();
    if (!msg) return alert("Please type a message!");
    const link = `https://m.me/alifhosson.www.xnx.com0?message=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
    msgInput.value = '';
  }
  sendBtn.addEventListener('click', sendMessage);
  msgInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

});
