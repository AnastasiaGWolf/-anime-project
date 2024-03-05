// console.log('connection check');
const { registration } = document.forms;
const message = document.querySelector('.regMsg');

registration.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(registration);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputs),
    });
    const result = await response.json();

    if (result.msgDone) {
      message.innerHTML = `${result.msgDone}`;
      setTimeout(() => {
        window.location.href = '/';
      }, 300);
    }

    if (result.msgErr) {
      message.innerHTML = `${result.msgErr}`;
    }
  } catch (error) {
    console.log(`Ошибка при регистрации: ${error}`);
  }
});

// console.log(registration);
