import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../../helpers/const";
import axios from "axios";
export const postContext = createContext();
export const usePosts = () => useContext(postContext);
const INIT_STATE = {
  posts: [],
  onePost: {},
}
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
    
      const { data } = await axios(API);
      dispatch({
        type: ACTIONS.GET_POSTS,
        payload: data,
      });
    };
    //! DELETE
    const deletePost = async(id)=>{
      await axios.delete(`${API}/${id}`)
      getPosts()
    }
    //! GET PRODUCT
    //! EDIT

    const values = {
      addPost,
      getPosts, 
      posts: state.posts,
      deletePost

    }
  return (
    <postContext.Provider value={values}>{children}</postContext.Provider>
  );
};

export default PostContextProvider;
