//функция для получения данных из хранилища под ключом bm
export const getLocalStorage = () => {
  const post = JSON.parse(localStorage.getItem("bm"));
  return post;
};

//функция для подсчета постов в избранном
export const getPostsCountInBookmark = () => {
  let post = getLocalStorage();
  // console.log(post);
  return post ? post.posts.length : 0;
};
