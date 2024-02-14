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

const PostCard = ({ elem, onFavoriteClick }) => {
  const { addPost, deletePost, increaseLikes } = usePosts();
  const navigate = useNavigate();
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addPostToBookmarks, checkPostInBm } = useBM();

  const handleClick = () => {
    setIsFavorite(true);
  };

  const handleLikeClick = () => {
    increaseLikes(); // Вызываем функцию увеличения лайков из контекста
  };

  return (
    <div>
      <Card
        sx={{
          height: 450,
          boxShadow: "none",
          margin: "40px 30px",
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
            color="primary"
            variant="outlined"
            size="medium"
          >
            DELETE
          </Button>
          <Button
            onClick={() => navigate(`/edit/${elem.id}`)}
            color="secondary"
            variant="outlined"
            size="medium"
          >
            EDIT
          </Button>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => {
              handleClick();
              handleLikeClick();
            }}
          >
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
