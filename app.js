document.addEventListener('DOMContentLoaded', () => {

  // ===== PROFILE =====
  const profilePic = document.getElementById('profilePic');
  if(profilePic) profilePic.src = 'https://i.imgur.com/HvU8vaC.jpeg';
  
  const displayName = document.querySelector('.display-name');
  if(displayName) displayName.textContent = '𝐀𝐋𝐈𝐅 𝐇𝐎𝐒𝐒𝐎𝐍';

  // ===== SOCIAL LINKS =====
  const socialContainer = document.querySelector('.social');
  if(socialContainer){
    const socialLinks = [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-telegram-plane', url: '#' },
      { icon: 'fab fa-whatsapp', url: '#' },
      { icon: 'fab fa-tiktok', url: '#' },
      { icon: 'fab fa-github', url: '#' }
    ];
    socialLinks.forEach(s => {
      const a = document.createElement('a');
      a.href = s.url; a.target = "_blank";
      a.innerHTML = `<i class="${s.icon}"></i>`;
      socialContainer.appendChild(a);
    });
  }

  // ===== INTRO =====
  const introContainer = document.getElementById('introText');
  if(introContainer){
    const introText = [
      "Hey 👋🏽",
      "I'm Alif Hosson",
      "Welcome to my profile",
      "Developer & Cyber Expert"
    ];
    introContainer.innerHTML = introText.map(line => `<span>${line}</span><br>`).join('');
  }

  // ===== SKILLS =====
  const skillsContainer = document.getElementById('skillsContainer');
  const projectBoxP = document.querySelector('#projectBox p');
  if(skillsContainer && projectBoxP){
    const skillsData = [
      { icon: 'fab fa-js', project: 'Project A: E-commerce site' },
      { icon: 'fab fa-node-js', project: 'Node API: Messenger bot' },
      { icon: 'fab fa-html5', project: 'Web Developing' },
      { icon: 'fab fa-react', project: 'React Portfolio Website' },
      { icon: 'fab fa-python', project: 'ML Script Automation' },
      { icon: 'fab fa-php', project: 'PHP CMS Backend' }
    ];
    skillsData.forEach(s => {
      const i = document.createElement('i');
      i.className = s.icon;
      i.dataset.project = s.project;
      i.title = s.project;
      skillsContainer.appendChild(i);

      // Hover effect
      i.addEventListener('mouseenter', () => projectBoxP.textContent = s.project);
      i.addEventListener('mouseleave', () => projectBoxP.textContent = "Hover over a skill to see project details here.");
    });
  }

  // ===== CLOCK =====
  const clockEl = document.getElementById('clock');
  function updateClock(){
    if(!clockEl) return;
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bst = new Date(utc + 6*60*60*1000);
    let h = bst.getHours();
    const m = String(bst.getMinutes()).padStart(2,'0');
    const s = String(bst.getSeconds()).padStart(2,'0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    clockEl.textContent = `${String(h).padStart(2,'0')}:${m}:${s} ${ampm}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ===== TERMINAL EFFECT =====
  const terminalOutput = document.getElementById("terminalOutput");
  if(terminalOutput){
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
  }

  // ===== SECRET REVEAL =====
  const secretBox = document.getElementById("secretBox");
  function revealSecret(){
    if(!secretBox) return;
    const messages = [
      "I am Alif, Cyber Expert 😎",
      "Coding is my superpower 💻",
      "Hack the planet 🌐",
      "Security first 🔒"
    ];
    secretBox.textContent = messages[Math.floor(Math.random()*messages.length)];
  }
  window.revealSecret = revealSecret;

  // ===== NETWORK BACKGROUND =====
  const netCanvas = document.getElementById("networkCanvas");
  if(netCanvas){
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
  }

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
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    if(!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
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

  // ===== ABOUT ME, BADGES, TIMELINE, HOBBIES =====
  const aboutMeP = document.querySelector('.card p');
  if(aboutMeP){
    aboutMeP.innerHTML = `
Hi, I'm <strong>Alif Hosson</strong> 🌟, a passionate developer & cyber expert.
I love creating <em>web applications</em>, exploring <em>cybersecurity</em>,
and sharing knowledge. My goal is to <strong>innovate, inspire, and illuminate</strong> 💻✨`;
  }

  const badgesContainer = document.getElementById('badgesContainer');
  if(badgesContainer){
    const badges = [
      { icon: 'fas fa-code', text: '50+ Projects' },
      { icon: 'fas fa-shield-alt', text: 'Cybersecurity' },
      { icon: 'fas fa-globe', text: 'Open Source' },
      { icon: 'fas fa-rocket', text: 'Always Learning' }
    ];
    badges.forEach(b => {
      const div = document.createElement('div');
      div.className = 'badge';
      div.innerHTML = `<i class="${b.icon}"></i> ${b.text}`;
      badgesContainer.appendChild(div);
    });
  }

  const timelineContainer = document.getElementById('timelineContainer');
  if(timelineContainer){
    const timelineEvents = [
      { year: '2019', desc: 'Started coding HTML & CSS' },
      { year: '2020', desc: 'Learned JS & Node.js' },
      { year: '2021', desc: 'Python & Cybersecurity' },
      { year: '2022', desc: 'Full-stack apps & open source' }
    ];
    timelineEvents.forEach(t => {
      const div = document.createElement('div');
      div.className = 'event';
      div.innerHTML = `<strong>${t.year}:</strong> ${t.desc}`;
      timelineContainer.appendChild(div);
    });
  }

  const hobbiesContainer = document.getElementById('hobbiesContainer');
  if(hobbiesContainer){
    const hobbies = [
      { icon: 'fas fa-gamepad', text: 'Gaming' },
      { icon: 'fas fa-music', text: 'Music' },
      { icon: 'fas fa-book', text: 'Reading' },
      { icon: 'fas fa-rocket', text: 'Tech Innovations' }
    ];
    hobbies.forEach(h => {
      const div = document.createElement('div');
      div.className = 'hobby';
      div.innerHTML = `<i class="${h.icon}"></i> ${h.text}`;
      hobbiesContainer.appendChild(div);
    });
  }

  // ===== MESSENGER SEND =====
  const sendBtn = document.getElementById('sendBtn');
  const msgInput = document.getElementById('msgInput');
  if(sendBtn && msgInput){
    function sendMessage() {
      const msg = msgInput.value.trim();
      if (!msg) return alert("Please type a message!");
      const link = `https://m.me/alifhosson.www.xnx.com0?message=${encodeURIComponent(msg)}`;
      window.open(link, '_blank');
      msgInput.value = '';
    }
    sendBtn.addEventListener('click', sendMessage);
    msgInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });
  }

});
