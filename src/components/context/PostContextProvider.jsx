import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const postContext = createContext();
export const usePosts = () => useContext(postContext);

const INIT_STATE = {
  posts: [],
  onePost: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS:
      return { ...state, posts: action.payload };

    case ACTIONS.GET_ONE_POST:
      return { ...state, onePost: action.payload };

    default:
      return state;
  }
};
const PostContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! CREATE
  const addPost = async (newPost) => {
    await axios.post(API, newPost);
    navigate("/posts");
  };

  // ! GET
  const getPosts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_POSTS,
      payload: data,
    });
  };
  //! DELETE
  const deletePost = async (id) => {
    console.log(id);
    await axios.delete(`${API}/${id}`);
    getPosts();
  };
  //! GET PRODUCT
  const getOnePost = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_POST,
      payload: data,
    });
  };
  //! EDIT
  const editPost = async (id, editedPost) => {
    await axios.patch(`${API}/${id}`, editedPost);
    navigate("/posts");
  };

  const values = {
    addPost,
    getPosts,
    posts: state.posts,
    deletePost,
    getOnePost,
    editPost,
    onePost: state.onePost,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};
export default PostContextProvider;
