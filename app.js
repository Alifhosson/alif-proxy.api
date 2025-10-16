document.addEventListener('DOMContentLoaded', () => {

  // PROFILE
  document.getElementById('profilePic').src = 'https://i.imgur.com/HvU8vaC.jpeg';
  document.querySelector('.display-name').textContent = '𝐀𝐋𝐈𝐅 𝐇𝐎𝐒𝐒𝐎𝐍';

  // SOCIAL
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
    a.href = s.url; a.target="_blank";
    a.innerHTML = `<i class="${s.icon}"></i>`;
    socialContainer.appendChild(a);
  });

  // INTRO
  const introText = ["Hey 👋🏽","I'm Alif Hosson","Welcome to my profile","Developer & Cyber Expert"];
  document.getElementById('introText').innerHTML = introText.map(line=>`<span>${line}</span><br>`).join('');

  // SKILLS
  const skillsData = [
    { icon: 'fab fa-js', project: 'Project A: E-commerce site' },
    { icon: 'fab fa-node-js', project: 'Node API: Messenger bot' },
    { icon: 'fab fa-html5', project: 'Web Developing' },
    { icon: 'fab fa-react', project: 'React Portfolio Website' },
    { icon: 'fab fa-python', project: 'ML Script Automation' },
    { icon: 'fab fa-php', project: 'PHP CMS Backend' }
  ];
  const skillsContainer = document.getElementById('skillsContainer');
  skillsData.forEach(s=>{
    const i = document.createElement('i');
    i.className = s.icon;
    i.dataset.project = s.project;
    skillsContainer.appendChild(i);
  });

  // SKILL HOVER
  const projectBox = document.getElementById('projectBox').querySelector('p');
  skillsContainer.querySelectorAll('i').forEach(skill=>{
    skill.addEventListener('mouseenter', ()=>projectBox.textContent = skill.dataset.project);
    skill.addEventListener('mouseleave', ()=>projectBox.textContent = "Hover over a skill to see project details here.");
  });

  // CLOCK
  function updateClock(){
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const bst = new Date(utc + 6*60*60*1000);
    let h = bst.getHours();
    const m = String(bst.getMinutes()).padStart(2,'0');
    const s = String(bst.getSeconds()).padStart(2,'0');
    const ampm = h >= 12 ? 'PM':'AM';
    h = h % 12 || 12;
    document.getElementById('clock').textContent = `${String(h).padStart(2,'0')}:${m}:${s} ${ampm}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // SECRET
  window.revealSecret = ()=>{
    const messages = ["I am Alif, Cyber Expert 😎","Coding is my superpower 💻","Hack the planet 🌐","Security first 🔒"];
    document.getElementById('secretBox').textContent = messages[Math.floor(Math.random()*messages.length)];
  };

});
