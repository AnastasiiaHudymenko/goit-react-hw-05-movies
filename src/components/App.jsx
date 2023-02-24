import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
export const App = () => {
  console.log(useLocation);
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
      </Routes>
    </div>
  );
};
