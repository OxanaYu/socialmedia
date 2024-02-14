import React, { createContext, useContext, useReducer } from "react";
import {
  getLocalStorage,
  getPostsCountInBookmark,
} from "../../helpers/function";
import { ACTIONS } from "../../helpers/const";
const bmContext = createContext();
export const useBM = () => useContext(bmContext);

const INIT_STATE = {
  bookmarks: JSON.parse(localStorage.getItem("bm")),
  bookmarksLength: getPostsCountInBookmark(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_BM:
      return { ...state, bookmarks: action.payload };
    default:
      return state;
  }
};

const BMProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //   ! GET
  // Функция для получения постов из хранилища
  const getPost = () => {
    let bookmarks = getLocalStorage();

    if (!bookmarks) {
      localStorage.setItem(
        "bm",
        JSON.stringify({
          posts: [],
          totalCount: 0,
        })
      );
      bookmarks = {
        posts: [],
        totalCount: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_BM,
      payload: bookmarks,
    });
  };

  // ! CREATE
  //функция для добавления поста в избранное
  const addPostToBookmarks = (post) => {
    let bookmarks = getLocalStorage();
    //проверка на существование данных под ключом bm
    if (!bookmarks) {
      bookmarks = {
        posts: [],
        totalCount: 0,
      };
    }

    let newPost = {
      item: post,
      postcount: 1,
    };
    // Пповеряем, есть ли уже такой пост в избранном

    let postToFind = bookmarks.posts.filter((elem) => elem.item.id === post.id);
    // если пост уже есть в ихбранном, то удаляем его из массива posts.через фильтр, в противном случае добавляем его  bookmarks.posts
    if (postToFind.length === 0) {
      bookmarks.posts.push(newPost);
    } else {
      bookmarks.posts = bookmarks.posts.filter(
        (elem) => elem.item.id !== post.id
      );
    }

    // ? Пересмотреть позже, нужно ли
    // пересчитываем totalPrice
    // cart.totalPrice = calcTotalPrice(cart.products);

    //обновляем данные в localStorage
    localStorage.setItem("bm", JSON.stringify(bookmarks));
    //обновляем состояние
    dispatch({
      type: ACTIONS.GET_BM,
      payload: bookmarks,
    });
  };

  // функция для проверки на наличие товара в корзине
  const checkPostInBm = (id) => {
    let bookmarks = getLocalStorage();
    if (bookmarks) {
      let newBookmark = bookmarks.posts.filter((elem) => elem.item.id == id);
      return newBookmark.length > 0 ? true : false;
    }
  };

  //! DELETE FROM CART
  const deletePostFromBM = (id) => {
    let bookmarks = getLocalStorage();
    bookmarks.posts = bookmarks.posts.filter((elem) => elem.item.id !== id);

    localStorage.setItem("bm", JSON.stringify(bookmarks));
    dispatch({
      type: ACTIONS.GET_BM,
      payload: bookmarks,
    });
  };

  const values = {
    addPostToBookmarks,
    checkPostInBm,
    getPost,
    deletePostFromBM,
    bookmarks: state.bookmarks,
  };
  return <bmContext.Provider value={values}>{children}</bmContext.Provider>;
};

export default BMProvider;
