import React, { useEffect, useState } from "react";
import { usePosts } from "../context/PostContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddPost = () => {
  const { addPost, getPosts, posts } = usePosts();
  const [post, setPost] = useState({
    title: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    getPosts();
  }, []);

  const handleInput = (e) => {
    const obj = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(obj);
  };

  const handleClick = () => {
    addPost(post);
  };

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
          onChange={handleInput}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="Image"
          label="Image URL"
          variant="outlined"
        />
        <Button onClick={handleClick}>ADD POST</Button>
      </Box>
    </div>
  );
};

export default AddPost;
