import { Link, useLocation } from 'react-router-dom';

export const TrendingListMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
