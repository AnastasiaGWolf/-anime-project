const postCreate = document.querySelector('.postCreate');
const msg = document.querySelector('#msg');

postCreate.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('btnSave')) {
    const data = new FormData(postCreate);
    const inputs = Object.fromEntries(data);

    try {
      const response = await fetch('/posts/new', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();

      if (result.msgDone) {
        msg.innerText = result.msgDone;
        setTimeout(() => {
          window.location.href = '/posts';
        }, 1000);
      } else {
        msg.innerText = result.msgErr;
      }
    } catch (error) {
      window.location.href = '/404';
    }
  }
});
