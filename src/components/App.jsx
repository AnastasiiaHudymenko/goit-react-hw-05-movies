import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetalis } from '../pages/MoviesDetalis';
import { CastMovie } from './CastMovie/CastMovie';
import { ReviewsMovie } from './ReviewsMovie/ReviewsMovie';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetalis />}>
          <Route path="cast" element={<CastMovie />} />
          <Route path="reviews" element={<ReviewsMovie />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
