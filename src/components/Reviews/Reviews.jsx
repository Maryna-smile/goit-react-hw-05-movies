import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/services/api';
import { RevieTitle } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(data => setReviews(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {reviews.map(el => {
        const { id, author, content } = el;
        return (
          <li key={id}>
            <RevieTitle>{author}</RevieTitle>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
