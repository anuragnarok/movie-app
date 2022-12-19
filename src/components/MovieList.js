import { Card, CardMedia ,Box} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef } from "react";
import "./HorizontalScroll";
import HorizontalScroll from "./HorizontalScroll";
const MovieList = (props) => {
  const scrollref = HorizontalScroll();
  return (
    <Stack direction='row'  overflow={'auto'} ref={scrollref}>
      {props.movie.map((movie, index) => (
        <div>
            <img src= {movie.Poster} alt='movie' />
        </div>
      ))}
    </Stack>
  );
};

export default MovieList;
