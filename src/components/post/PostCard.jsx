import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Detail from "./Detail";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContextProvider";
import { useBM } from "../context/BMProvider";

const PostCard = ({ elem }) => {
  const { addPost, deletePost } = usePosts();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addPostToBookmarks, checkPostInBm } = useBM();

  const handleClick = () => {
    setIsFavorite(true); // Устанавливаем флаг isFavorite в true только при первом клике
  };

  return (
    <div>
      <Card
        sx={{
          height: 450,
          boxShadow: "none",
          margin: "40px 40px",
          width: { md: "30vw", lg: "19vw" },
        }}
      >
        <CardActionArea>
          <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.Image} />
        </CardActionArea>
        <CardContent sx={{ padding: "20px 5px 0 5px" }}>
          <Typography
            variant="h5"
            fontSize="25px"
            fontWeight="700"
            component="div"
          >
            {elem.title}
          </Typography>
          <Typography color="black" fontSize="15px" fontWeight="700">
            {elem.description}
          </Typography>
          <Button
            onClick={() => deletePost(elem.id)}
            color="error"
            variant="contained"
            size="medium"
          >
            DELETE
          </Button>
          <Button
            onClick={() => navigate(`/edit/${elem.id}`)}
            color="success"
            variant="contained"
            size="medium"
          >
            EDIT
          </Button>
          <IconButton size="large" color="inherit" onClick={handleClick}>
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: checkPostInBm(elem.id) ? "black" : "",
              color: checkPostInBm(elem.id) ? "red" : "inherit", // изменение цвета иконки
            }}
            onClick={() => addPostToBookmarks(elem)}
          >
            <BookmarkBorderIcon />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostCard;
