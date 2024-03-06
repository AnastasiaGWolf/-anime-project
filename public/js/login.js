const { login } = document.forms;
const loginMsg = document.querySelector('.logMsg');

login.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(login);
  const inputs = Object.fromEntries(data);

  try {
    const response = await fetch('/users/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    const result = await response.json();

    if (result.logErr) {
      loginMsg.innerHTML = `${result.logErr}`;
    }

    if (result.logMsg) {
      loginMsg.innerHTML = `${result.logMsg}`;
      setTimeout(() => {
        window.location.href = '/';
      }, 400);
    }
  } catch (error) {
    console.log(`Ошибка при попытке залогиниться: ${error}`);
  }
});
