import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";
import { usePosts } from "../context/PostContextProvider";
import PostCard from "./PostCard";
import { Box } from "@mui/material";
import PaginationControlled from "./Pagination";

const PostList = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  useEffect(() => {
    getPosts();
  }, []);

  //! PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(posts.length / itemPerPage);
  console.log(count);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return posts.slice(begin, end);
  };
  const handleChange = (value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <PostCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PaginationControlled
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </div>
  );
};

export default PostList;
