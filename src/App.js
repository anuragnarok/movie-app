import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import axios from "axios";
import "./App.css";
import { Stack } from "@mui/system";
import AddFav from "./components/AddFav";
import "bootstrap/dist/css/bootstrap.min.css";
import RemoveFav from "./components/RemoveFav";
function App() {
  const [movie, setMovie] = useState([
    {
      Title: "Disney Gallery: The Mandalorian",
      Year: "2020–",
      imdbID: "tt12162902",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjY0YWEzNTMtZjRlZi00MzQ1LThkMTAtMTk4OTE5MWVkYzFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      Title: "The Magical World of Disney",
      Year: "1954–1997",
      imdbID: "tt0046593",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzEzMzQzMDc0Nl5BMl5BanBnXkFtZTcwMTk5ODczMQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Wonderful World of Disney",
      Year: "1997–2005",
      imdbID: "tt0132666",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmJjYzNkNjgtZDZiNS00YjdmLTk4MDEtMzJkYWFkZmQ3ZWFiXkEyXkFqcGdeQXVyMjIzMTQ5NjE@._V1_SX300.jpg",
    },
    {
      Title:
        "I Killed My Lesbian Wife, Hung Her on a Meathook, and Now I Have a Three Picture Deal at Disney",
      Year: "1993",
      imdbID: "tt0166222",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTNlZDMxMDItM2M4Yy00NDNkLWJkOTMtMTJkMTRlYTNiZjNkXkEyXkFqcGdeQXVyNjMxODMyODU@._V1_SX300.jpg",
    },
    {
      Title: "Walt Disney Animation Studios Short Films Collection",
      Year: "2015",
      imdbID: "tt6181728",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTdkYjkyMzgtMjQyOC00ZmNiLTg1OTAtNzJhY2MyNjlmM2M5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg",
    },
    {
      Title: "The Story of Frozen: Making a Disney Animated Classic",
      Year: "2014",
      imdbID: "tt4007494",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk0NjAzNjg4NF5BMl5BanBnXkFtZTgwNDQ3NjIwMzE@._V1_SX300.jpg",
    },
  ]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("");
  const client = axios.create({
    baseURL: `http://www.omdbapi.com/?s=${search}&apikey=8ba2c07d`,
  });
  useEffect(() => {
    async function getMovies() {
      const response = await client.get();
      console.log(response.data.Search);
      if (response.data.Search) {
        setMovie(response.data.Search);
      }
    }
    getMovies(search);
  }, [search]);

  useEffect(() => {
    const movieFavs = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavs);
  }, []);
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const removeFavMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        className="App"
      >
        <NavBar search={search} setSearch={setSearch} />
        <div>
          <MovieList
            movie={movie}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFav}
          />
        </div>
        <Stack>
          <Typography
            variant="h5"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Favourites
          </Typography>
          <MovieList
            movie={favourites}
            handleFavouritesClick={removeFavMovie}
            favouriteComponent={RemoveFav}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
