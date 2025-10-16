document.addEventListener('DOMContentLoaded', () => {

  // Profile
  document.getElementById('profilePic').src = 'https://i.imgur.com/HvU8vaC.jpeg';
  document.getElementById('displayName').textContent = '𝐀𝐋𝐈𝐅 𝐇𝐎𝐒𝐒𝐎𝐍';

  // Social Links
  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-telegram-plane', url: '#' },
    { icon: 'fab fa-whatsapp', url: '#' },
    { icon: 'fab fa-tiktok', url: '#' },
    { icon: 'fab fa-github', url: '#' }
  ];
  const socialContainer = document.getElementById('socialLinks');
  socialLinks.forEach(s=>{
    const a = document.createElement('a');
    a.href=s.url; a.target="_blank";
    a.innerHTML = `<i class="${s.icon}"></i>`;
    socialContainer.appendChild(a);
  });

  // Intro
  const introText = ["Hey 👋🏽","I'm Alif Hosson","Welcome to my profile","Developer & Cyber Expert"];
  const introContainer = document.getElementById('introText');
  introContainer.innerHTML = introText.map(t=>`<span>${t}</span><br>`).join('');

  // Skills
  const skillsData = [
    { icon:'fab fa-js', project:'Project A: E-commerce site' },
    { icon:'fab fa-node-js', project:'Node API: Messenger bot' },
    { icon:'fab fa-html5', project:'Web Developing' },
    { icon:'fab fa-react', project:'React Portfolio Website' },
    { icon:'fab fa-python', project:'ML Script Automation' },
    { icon:'fab fa-php', project:'PHP CMS Backend' }
  ];
  const skillsContainer = document.getElementById('skillsContainer');
  skillsData.forEach(s=>{
    const i = document.createElement('i');
    i.className = s.icon;
    i.dataset.project = s.project;
    i.title = s.project;
    skillsContainer.appendChild(i);
  });

  const projectBox = document.getElementById('projectBox').querySelector('p');
  skillsContainer.querySelectorAll('i').forEach(skill=>{
    skill.addEventListener('mouseenter', ()=> projectBox.textContent = skill.dataset.project);
    skill.addEventListener('mouseleave', ()=> projectBox.textContent = "Hover over a skill to see project details here.");
  });

  // About Me
  document.getElementById('aboutMe').innerHTML = `
Hi, I'm <strong>Alif Hosson</strong> 🌟, a passionate developer & cyber expert.
I love creating <em>web applications</em>, exploring <em>cybersecurity</em>,
and sharing knowledge.`;

});
