const animeCreate = document.querySelector('.animeCreate');
const msg = document.querySelector('#msg');

animeCreate.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(animeCreate);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/anime/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();
    if (result.msg) {
      msg.innerText = `${result.msg}`;

      setTimeout(() => {
        window.location.href = '/';
      }, 400);
    }
  } catch (error) {
    msg.innerText = 'Ошибка при попытке создать Аниме:';
  }
});
