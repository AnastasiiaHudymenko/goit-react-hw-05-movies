import { useParams } from 'react-router-dom';

export const MoviesDetalis = ({ movieId }) => {
  const { id } = useParams();
  console.log(movieId);

  return (
    <div>
      <p>Hello MovieDetalis {id}</p>
    </div>
  );
};
