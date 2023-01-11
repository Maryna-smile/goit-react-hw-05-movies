import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getQueryMovies } from '../services/api';
import {
  MovieSearch,
  MovieItem,
  MovieList,
  MoviePoster,
  MovieTitle,
  SearchButton,
  SearchForm,
} from './Movies.styled';
import Poster from '../../images/no_poster.png';

export default function Movies() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [queryMovies, setQueryMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!search) {
      return;
    }

    getQueryMovies(search).then(data => setQueryMovies(data.results));
  }, [search]);

  const handleInputValue = e => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast('Wow so easy!');
      return;
    }

    setSearchParams(query !== '' ? { search: query } : {});
  };

  return (
    <>
      <ToastContainer />
      <SearchForm onSubmit={handleQuerySubmit}>
        <MovieSearch
          type="text"
          onChange={handleInputValue}
          value={query}
          autoComplete="off"
          placeholder="enter movie title"
        />
        <SearchButton>Search</SearchButton>
      </SearchForm>
      <MovieList>
        {queryMovies.map(el => {
          const { id, title, name, poster_path, original_title } = el;
          return (
            <MovieItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <MoviePoster
                  src={
                    el.poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : Poster
                  }
                  alt={`poster of movie ${original_title}`}
                />
                <MovieTitle> {title ? title : name}</MovieTitle>
              </Link>
            </MovieItem>
          );
        })}
      </MovieList>
    </>
  );
}
