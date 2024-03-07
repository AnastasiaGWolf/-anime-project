const btnNewPost = document.querySelector('#btnNewPost');

const postsContainer = document.querySelector('.postsContainer');

btnNewPost.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/article';
});

postsContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnUpPost')) {
    const { postid } = event.target.dataset;
    window.location.href = `/posts/${postid}`;
  }
});

postsContainer.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnDeletePost')) {
    const { postid } = event.target.dataset;
    try {
      const response = await fetch(`/posts/${postid}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (result.msgDone) {
        const deletedPost = event.target.parentNode;
        deletedPost.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
});
