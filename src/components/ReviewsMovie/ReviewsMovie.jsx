import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../../services/MovieServices.js';
import {
  ReviewsList,
  AuthorTitle,
  ReviewsItem,
  Container,
} from './ReviewsMovie.styled';

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
        <Container>
          <ReviewsList>
            {reviews.map(({ author, content, id }) => {
              return (
                <ReviewsItem key={id}>
                  <AuthorTitle>Author: {author}</AuthorTitle>
                  <p>
                    {' '}
                    <b>Content:</b> {transformContent(content)}
                  </p>
                </ReviewsItem>
              );
            })}
          </ReviewsList>
        </Container>
      ) : (
        <p>No reviews found for this movie</p>
      )}
    </>
  );
};

function transformContent(str) {
  if (str.length > 270) {
    let newStr = str.slice(0, 270);
    return `${newStr}...`;
  }
  return str;
}

export default ReviewsMovie;
