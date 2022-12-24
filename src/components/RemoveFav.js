import { Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const RemoveFav = () => {
  return (
    <div>
      <Typography variant="span" className="fav">
        Remove from Favourite
      </Typography>
      <FavoriteBorderIcon sx={{color:'white'}}/>
    </div>
  );
};

export default RemoveFav;
