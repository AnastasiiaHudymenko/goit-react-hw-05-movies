import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from './TrendingList.styled';
import { MovieTitle, ImgMovie, Item } from './TrendingList.styled';

const TrendingListMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ title, id, images }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <ImgMovie width={300} src={images} alt={title} />
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </Item>
      ))}
    </MoviesList>
  );
};

export default TrendingListMovie;
