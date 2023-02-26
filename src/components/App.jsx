import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetalis } from '../pages/MoviesDetalis';
import { CastMovie } from './CastMovie/CastMovie';
import { ReviewsMovie } from './ReviewsMovie/ReviewsMovie';
export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetalis />}>
          <Route path="/movies/:movieId/cast" element={<CastMovie />} />
          <Route path="/movies/:movieId/reviews" element={<ReviewsMovie />} />
        </Route>
      </Routes>
    </div>
  );
};
