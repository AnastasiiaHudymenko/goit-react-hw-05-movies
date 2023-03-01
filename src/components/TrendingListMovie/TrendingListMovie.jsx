import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesList } from './TrendingList.styled';
import { MovieTitle, ImgMovie, Item } from './TrendingList.styled';

const TrendingListMovie = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  console.log({ from: location });
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

TrendingListMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      images: PropTypes.string,
    })
  ),
};

export default TrendingListMovie;
