const postCreate = document.querySelector('.postCreate');
const msg = document.querySelector('#msg');

postCreate.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('btnSave')) {
    const data = new FormData(postCreate);
    const inputs = Object.fromEntries(data);
    const { postid } = e.target.dataset;
    try {
      const response = await fetch(`/posts/edit/${postid}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(inputs),
      });
      const result = await response.json();
      if (result.msg) {
        msg.innerText = result.msg;
        setTimeout(() => {
          window.location.href = '/posts';
        }, 1000);
      }
    } catch (error) {
      window.location.href = '/404';
    }
  }
});
