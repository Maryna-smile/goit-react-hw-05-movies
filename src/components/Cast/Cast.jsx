import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/services/api';
import Photo from '../../images/no_photo.jpg';
import { ActorImg, ActorItem, ActorList, Text } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.cast));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <ActorList>
        {cast.length > 0 &&
          cast.map(el => {
            const { id, profile_path, original_name } = el;
            return (
              <ActorItem key={id}>
                <ActorImg
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : Photo
                  }
                  alt={`actor ${original_name}`}
                />
                <Text>{original_name}</Text>
              </ActorItem>
            );
          })}
      </ActorList>
    </section>
  );
}
