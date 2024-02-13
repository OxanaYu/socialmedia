import React, { useEffect } from "react";
import { usePosts } from "../context/PostContextProvider";
import PostCard from "./PostCard";
import { Box } from "@mui/material";

const PostList = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((elem) => (
          <PostCard key={elem.id} elem={elem} />
        ))}
      </Box>
    </div>
  );
};

export default PostList;
