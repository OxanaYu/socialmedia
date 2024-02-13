import { AddShoppingCart, Details } from '@mui/icons-material'
import { Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Detail from './Detail'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostContextProvider'

const PostCard = ({elem}) => {
    const {addPost, deletePost} = usePosts()
     const navigate = useNavigate()
  return (
    <div>
      <Card sx={{
      height: 450,
      boxShadow: "none",
      margin:"40px 40px",
      width:{md:"30vw", lg:"19vw"}
      }}>
       <CardActionArea >
        <CardMedia sx={{height: 240, borderRadius: 4}} image={elem.Image}/>
       </CardActionArea>
       <CardContent sx={{padding: "20px 5px 0 5px"}}>
         <Typography variant="h5" fontSize="25px" fontWeight="700" component="div">
            {elem.title}
         </Typography>
         <Typography color="black" fontSize="15px" fontWeight="700">
            {elem.description}
         </Typography>
         <Button onClick={()=> deletePost(elem.id)}  color="error"
            variant="contained"
            size="medium">
          DELETE
         </Button>
         <Button onClick={()=>navigate(`/edit/${elem.id}`)} color="success" variant="contained" size="medium">
          EDIT
         </Button>
       </CardContent>
       <Detail  />
    </Card>
    </div>
  )
}

export default PostCard
