import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../../services/MovieServices.js';
import {
  CastList,
  CastItem,
  WrapperContent,
  ImgCast,
} from './CastMovie.styled';
import notFound from '../../not-found.jpg';

const CastMovie = () => {
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
      <CastList>
        {cast.map(({ image, name, character, id }) => {
          return (
            <CastItem key={id}>
              {image ? (
                <ImgCast width={150} src={image} alt="" />
              ) : (
                <ImgCast
                  style={{ objectFit: 'cover', height: '221px' }}
                  width={150}
                  src={notFound}
                  alt=""
                />
              )}
              <WrapperContent>
                <p>{name}</p>
                <p>{character}</p>
              </WrapperContent>
            </CastItem>
          );
        })}
      </CastList>
    </div>
  );
};

export default CastMovie;
