const btnUpUser = document.querySelector('#btnUpUser');
const userCard = document.querySelector('.user-card');

btnUpUser.addEventListener('click', async (e) => {
  e.preventDefault();
  const id = btnUpUser.dataset.userid;

  const response = await fetch(`/account/${id}`);
  const result = await response.json();
  userCard.innerHTML = `
  <form>
    <label>Имя пользователя:</label>
    <input type="text" name="name" value="${result.name}" />

    <label>Почта:</label>
    <input type="email" name="email" value="${result.email}" />

    <button id="btnSave" type="submit">Сохранить изменения</button>
  </form>
  <script defer src="/js/userUpdate.js" />
  `;
});
