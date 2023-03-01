import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetalis = lazy(() => import('../pages/MoviesDetalis'));
const CastMovie = lazy(() => import('../components/CastMovie/CastMovie'));
const ReviewsMovie = lazy(() =>
  import('../components/ReviewsMovie/ReviewsMovie')
);

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
