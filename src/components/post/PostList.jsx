import React, { useEffect } from 'react'
import { usePosts } from '../context/PostContextProvider';
import { Box } from '@mui/material';
import PostCard from './PostCard';

const PostList = () => {
  const {getPosts, posts} = usePosts();

  useEffect(()=>{
    getPosts()
  },[]);
  return (
    <div>
      <Box sx={{display:"flex", flexWrap:"wrap"}}>
        {posts.map((elem)=>(
          <PostCard key={elem.id} elem={elem}/>
        ))}
     </Box>
    </div>
  )
}

export default PostList

