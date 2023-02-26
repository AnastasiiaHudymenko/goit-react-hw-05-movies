import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../../services/MovieServices.js';
export const CastMovie = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const movieServices = new MovieServices();

  useEffect(() => {
    onRequest(movieId);
    // eslint-disable-next-line
  }, []);

  const onRequest = async id => {
    try {
      const res = await movieServices.getCastOrReviewsMovie(id, 'credits');
      setCast(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {cast.map(({ image, name, character, id }) => {
          return (
            <li key={id}>
              {image && <img src={image} alt="" width={100} />}

              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
