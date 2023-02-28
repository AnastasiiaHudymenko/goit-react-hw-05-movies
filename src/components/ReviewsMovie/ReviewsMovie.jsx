import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../../services/MovieServices.js';

const ReviewsMovie = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const movieServices = new MovieServices();

  useEffect(() => {
    onRequest(movieId);
    // eslint-disable-next-line
  }, []);

  const onRequest = async id => {
    try {
      const res = await movieServices.getCastOrReviewsMovie(id, 'reviews');
      setReviews(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {reviews ? (
        <div>
          <ul>
            {reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h2>Author:{author}</h2>
                  <p>Content:{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default ReviewsMovie;
