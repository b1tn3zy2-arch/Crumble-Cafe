export function loadContact() {
  const content = document.getElementById('content');
  const div = document.createElement('div');

  div.innerHTML = `
    <h2>Контакты</h2>
    <p>Адрес: г. Москва, ул. Пряничная, д. 7</p>
    <p>Телефон: +7 (999) 123-45-67</p>
    <p>Часы работы: 9:00 – 21:00</p>
    <p><a href="https://vk.com/crumblecafe" target="_blank">Мы во ВКонтакте</a></p>
    <button id="bookBtn">Забронировать столик</button>

    <h2>Обратная связь</h2>
    <form id="feedbackForm">
      <p><input name="name" placeholder="Имя"></p>
      <p><input name="email" placeholder="Email"></p>
      <p><textarea name="message" placeholder="Сообщение"></textarea></p>
      <button type="submit">Отправить</button>
    </form>
  `;

  content.appendChild(div);

  document.getElementById('bookBtn').onclick = () => {
    alert('Столик забронирован! Мы вам перезвоним.');
  };

  const form = document.getElementById('feedbackForm');

  form.onsubmit = (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    form.querySelectorAll('input, textarea').forEach(el => el.style.border = '');

    let ok = true;

    if (name.length < 2) {
      form.name.style.border = '2px solid red';
      ok = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      form.email.style.border = '2px solid red';
      ok = false;
    }
    if (form.message.value.trim() === '') {
      form.message.style.border = '2px solid red';
      ok = false;
    }

    if (!ok) {
      alert('Заполните поля правильно');
      return;
    }

    alert('Спасибо, ' + name + '!');
    form.reset();
  };
}