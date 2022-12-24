import { Stack } from "@mui/system";
import "./HorizontalScroll";
import HorizontalScroll from "./HorizontalScroll";
const MovieList = (props) => {
  const scrollref = HorizontalScroll();
  const FavouriteComponent = props.favouriteComponent;
  return (
    <Stack direction="row" overflow={"auto"} ref={scrollref}>
  
      {props.movie.map((movie, index) => (
        <div className="image-container">
          <img src={movie.Poster} alt="movie" />
          <div onClick={()=> props.handleFavouritesClick(movie)} className="overlay">
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </Stack>
  );
};

export default MovieList;
