const btnUpUser = document.querySelector('#btnUpUser');
const userCard = document.querySelector('.user-card');

btnUpUser.addEventListener('click', async (e) => {
  e.preventDefault();
  const id = btnUpUser.dataset.userid;

  let response = await fetch(`/users/${id}`);
  let result = await response.json();
  userCard.innerHTML = `
  <form class="updateUser">
    <label>Имя пользователя:</label>
    <input type="text" name="name" value="${result.name}" />

    <label>Почта:</label>
    <input type="email" name="email" value="${result.email}" />

    <button id="btnSave" type="submit">Сохранить изменения</button>
  </form>
  <script defer src="/js/userUpdate.js" />
  `;

  const form = document.querySelector('.updateUser');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const inputs = Object.fromEntries(data);

    response = await fetch('/users/update', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    result = await response.json();

    console.log(result);

    userCard.innerHTML = `
      <p>Имя пользователя:</p>
      <p>${result.name}</p>
      <p>Почта пользователя:</p>
      <p>${result.email}</p>
      <button id="btnUpUser" data-userid=${result.id} type="button">Редактировать профиль</button>
    `;
  });
});
