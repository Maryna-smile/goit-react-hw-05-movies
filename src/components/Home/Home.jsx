import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/services/api';
import { MovieItem, MovieList, MoviePoster, MovieTitle } from './Home.styled';

export default function Home() {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <MovieList>
        {movies.length > 0 &&
          movies.map(el => {
            const { id, title, name } = el;
            return (
              <MovieItem key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  <MoviePoster
                    src={
                      el.poster_path &&
                      `https://image.tmdb.org/t/p/w500${el.poster_path}`
                    }
                    alt={`poster of movie ${el.original_title}`}
                  />
                  <MovieTitle> {title ? title : name}</MovieTitle>
                </Link>
              </MovieItem>
            );
          })}
      </MovieList>
    </div>
  );
}
