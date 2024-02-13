import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Detail from "./Detail";

const PostCard = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        sx={{
          height: 450,
          boxShadow: "none",
          margin: "2%",
          width: { md: "30vw", lg: "19vw" },
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: 240, borderRadius: 4, objectFit: "cover" }}
            image={elem.image}
          />
        </CardActionArea>
        <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
          <Typography
            variant="h6"
            fontSize="18px"
            fontWeight={700}
            component="div"
          >
            {elem.title}
          </Typography>
          <Stack>
            <Rating name="half-rating" defaultValue={0} precision={1} />
          </Stack>
          <Typography color="black" fontSize="14px" fontWeight={700}>
            {elem.description}
          </Typography>

          <Button color="secondary" variant="outlined" size="medium">
            Delete
          </Button>
          <Button
            onClick={() => navigate(`/edit/${elem.id}`)}
            color="primary"
            variant="outlined"
            size="medium"
          >
            Edit
          </Button>
        </CardContent>
        <Detail elem={elem} />
      </Card>
    </div>
  );
};

export default PostCard;
