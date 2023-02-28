import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../../services/MovieServices';

const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const movieServices = new MovieServices();

  useEffect(() => {
    if (!query) return;

    async function onRequest(query) {
      const res = await movieServices.getMovieSearch(query);
      setMovies(res);
    }
    onRequest(query);
    // eslint-disable-next-line
  }, [query, location.state]);
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
