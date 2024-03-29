const addFavor = document.querySelector('#addFavor');
const allPosts = document.querySelector('#allPosts');
const createPost = document.querySelector('#createPost');
const buttons = document.querySelector('.buttons');
const parent = document.querySelector('body');

addFavor.addEventListener('click', async (e) => {
  e.preventDefault();
  const animeId = addFavor.dataset.animeid;

  const response = await fetch(`/favorites/${animeId}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
  });
  const result = await response.json();

  const msg = document.createElement('div');
  msg.style.cssText = `display: flex; 
                      flex-direction: row;
                      justify-content: center;`;
  msg.innerHTML = `<h5>${result.msgDone}</h5>`;
  parent.insertBefore(msg, buttons);

  setTimeout(() => {
    msg.remove();
  }, 4500);
});

allPosts.addEventListener('click', async (e) => {
  e.preventDefault();
  const id = allPosts.dataset.animeid;

  try {
    const response = await fetch(`/posts/anime/${id}`);
    if (response.ok) {
      window.location.href = `/posts/anime/${id}`;
    }
  } catch (error) {
    console.error('Error fetching posts data:', error);
    window.location.href = '/404';
  }
});

createPost.addEventListener('click', async (e) => {
  e.preventDefault();
  window.location.href = '/article';
});
