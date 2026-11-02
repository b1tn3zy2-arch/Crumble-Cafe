import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const content = document.getElementById('content');

function setActive(btn) {
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function clearAndLoad(loadFunction) {
  const nav = content.querySelector('nav');
  content.innerHTML = '';
  if (nav) content.appendChild(nav);
  loadFunction();
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Главная';
  homeBtn.onclick = () => { setActive(homeBtn); clearAndLoad(loadHome); };

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Меню';
  menuBtn.onclick = () => { setActive(menuBtn); clearAndLoad(loadMenu); };

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Контакты';
  contactBtn.onclick = () => { setActive(contactBtn); clearAndLoad(loadContact); };

  nav.append(homeBtn, menuBtn, contactBtn);
  content.appendChild(nav);

  homeBtn.classList.add('active');
}

createNav();
loadHome();