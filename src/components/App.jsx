import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
// import { MoviesDetalis } from '../pages/MoviesDetalis';
export const App = () => {
  const [selectMovie, setSelectMovie] = useState(null);
  console.log(selectMovie);
  const onClick = id => {
    setSelectMovie(id);
  };
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
        <Route path="/" element={<Home onClick={onClick} />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route
          path="/movies/:id"
          element={<MoviesDetalis movieId={selectMovie} />}
        /> */}
      </Routes>
    </div>
  );
};
