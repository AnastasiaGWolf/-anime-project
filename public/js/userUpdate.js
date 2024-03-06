// const userCard = document.querySelector('.user-card');
// const btnSave = document.querySelector('#btnSave');

// btnSave.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const form = document.querySelector('form');
//   const data = new FormData(form);
//   const inputs = Object.fromEntries(data);

//   const response = await fetch('/account/update', {
//     method: 'PUT',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(inputs),
//   });
//   const result = await response.json();
//   userCard.innerHTML = `
//   <p>Имя пользователя:</p>
//   <p>${result.name}</p>
//   <p>Почта пользователя:</p>
//   <p>${result.email}</p>
//   <button id="btnUpUser" data-userid=${result.id} type="button">Редактировать профиль</button>
//   `;
// });
