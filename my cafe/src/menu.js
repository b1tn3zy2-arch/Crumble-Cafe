import menuData from './menu-data.json';
import croissantImg from './images/croissant.jpg';
import tiramisuImg from './images/tiramisu.jpg';
import cheesecakeImg from './images/cheesecake.jpg';

const images = {
  'Круассан': croissantImg,
  'Тирамису': tiramisuImg,
  'Чизкейк': cheesecakeImg,
};

export function loadMenu() {
  const content = document.getElementById('content');
  const div = document.createElement('div');

  const count = Number(localStorage.getItem('menuCount') || 0) + 1;
  localStorage.setItem('menuCount', count);

  const title = document.createElement('h2');
  title.textContent = 'Меню';
  div.appendChild(title);

  const counter = document.createElement('p');
  counter.textContent = 'Вы открывали это меню ' + count + ' раз';
  div.appendChild(counter);

  menuData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = images[item.name];
    img.alt = item.name;
    img.width = 120;

    const name = document.createElement('h3');
    name.textContent = item.name + ' — ' + item.price + ' ₽';

    const desc = document.createElement('p');
    desc.textContent = item.description;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    div.appendChild(card);
  });

  content.appendChild(div);
}