import { Stack } from '@mui/system';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react/components';
const MovieCarousal = (props) => {
    const [emblaRef] = useEmblaCarousel()
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className='embla' ref={emblaRef}>
  
      {props.movie.map((movie, index) => (
        <div className="image-container">
          <img src={movie.Poster} alt="movie" />
          <div onClick={()=> props.handleFavouritesClick(movie)} className="overlay">
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieCarousal