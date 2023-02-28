import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import MovieServices from '../services/MovieServices.js';

export const MoviesDetalis = () => {
  const { movieId } = useParams();
  const [movieDetalis, setMovieDetalis] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const movieServices = new MovieServices();

  useEffect(() => {
    onRequest(movieId);
    // eslint-disable-next-line
  }, []);

  const onRequest = async id => {
    try {
      const res = await movieServices.getMovieDetalis(id);
      setMovieDetalis(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const { title, image, overview, genres, userScore } = movieDetalis;

  return (
    <>
      {loading ? (
        <MutatingDots
          height="100"
          width="100"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          visible={true}
        />
      ) : (
        <div>
          <Link to={location.state.from} state={{ from: location }}>
            Go back{' '}
          </Link>

          {image && <img src={image} alt={title} />}

          <h1>{title}</h1>
          <h2>User score:</h2>
          <p>{userScore}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Read about our cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Get to know the reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};
