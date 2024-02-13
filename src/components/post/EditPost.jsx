import React, { useEffect, useState } from 'react'
import { usePosts } from '../context/PostContextProvider'
import { Box, Button, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const {id} = useParams()
  const {getOnePost, editPost, onePost} = usePosts();
  const [post, setPost] = useState({
    title: "",
    description: "",
    img: "",
  });
  const handleInput = (e) => {
    const obj = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(obj);
  };
  const handleClick = ()=>{
    editPost(id, post )
  }
  useEffect(()=>{
    getOnePost(id)
  },[])
  useEffect(()=>{
    if(onePost){
      setPost(onePost)
    }
  }, [onePost])
  return (
    <div>
        <Box
        sx={{
          width: "100vh",
          height: 500,
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" align="center">
          CREATE POST
        </Typography>
        <TextField
         value={post.title}
          onChange={handleInput}
          fullWidth
          name="title"
          variant="outlined"
        />
        <TextField
         value={post.description}
          onChange={handleInput}
          fullWidth
          name="description"
          variant="outlined"
        />
        <TextField
         value={post.Image}
          onChange={handleInput}
          fullWidth
          name="Image"
          variant="outlined"
        />
        <Button onClick={handleClick}>SAVE CHANGES</Button>
      </Box>
    </div>
  )
}

export default EditPost

