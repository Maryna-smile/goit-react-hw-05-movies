import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMoviesByID } from '../services/api';
import {
  Button,
  ExtraButton,
  FlexGeneral,
  FlexWrapper,
  InnerDownFlex,
  InnerUpFlex,
  MovieCaptions,
  MovieGenres,
  MoviePoster,
  MovieText,
  MovieTitle,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const prevLocation = useLocation();
  const location = useRef(prevLocation);

  useEffect(() => {
    getMoviesByID(Number(movieId)).then(data => setFilm(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    poster_path,
    original_title,
    release_date,
    overview,
    genres,
    vote_average,
  } = film;

  return (
    <>
      <FlexGeneral>
        <FlexWrapper>
          <MoviePoster
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`poster of movie ${original_title}`}
          />
          <InnerUpFlex>
            <MovieTitle>
              {original_title} ({release_date && release_date.slice(0, 4)})
            </MovieTitle>
            <MovieText> User score: {Math.ceil((vote_average * 100) / 10)} %</MovieText>
            <MovieCaptions>Overview</MovieCaptions>
            <MovieText>{overview}</MovieText>
            <MovieCaptions>Genres</MovieCaptions>
            <MovieGenres>
              {genres &&
                genres.map(genre => {
                  const { id, name } = genre;
                  return <li key={id}>{name}</li>;
                })}
            </MovieGenres>
            <Button to={location.current.state?.from ?? '/'}>Go back</Button>
            
          </InnerUpFlex>
        </FlexWrapper>
       
        <InnerUpFlex>
        <MovieCaptions>Additional information</MovieCaptions>
        <InnerDownFlex>
          <ExtraButton to="actors">Cast</ExtraButton>
          <ExtraButton to="reviews">Reviews</ExtraButton>
        </InnerDownFlex>
        <Outlet />
        </InnerUpFlex>
      </FlexGeneral>
    </>
  );
}
