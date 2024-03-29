const btnUpUser = document.querySelector('#btnUpUser');
const userCard = document.querySelector('.user-card');
const cardsContainer = document.querySelector('.cardsContainer');

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

    <button class="btnMy" id="btnSave" type="submit">Сохранить изменения</button>
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
      <p><b>${result.name}</b></p>
      <p>Почта пользователя:</p>
      <p>${result.email}</p>
      <button class="btnMy" id="btnUpUser" data-userid=${result.id} type="button">Редактировать профиль</button>
    `;
  });
});

cardsContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnDltCard')) {
    const { cardid } = event.target.dataset;
    try {
      const response = await fetch(`/favorites/${cardid}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (result.msgDone) {
        const deletedCard = event.target.parentNode;
        deletedCard.remove();
      }
    } catch (error) {
      console.log(error);
    }
  } else if (event.target.classList.contains('anime')) {
    const anime = event.target.dataset.animeid;
    window.location.href = `/anime/${anime}`;
  }
});
