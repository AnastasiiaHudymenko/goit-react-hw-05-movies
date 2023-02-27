import { Formik, Form, Field } from 'formik';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MovieServices from '../services/MovieServices';
import { MovieList } from '../components/MovieList/MovieList';

export const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(() => {
    return JSON.parse(sessionStorage.getItem('search')) ?? [];
  });
  const movieServices = new MovieServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(query, searchParams);

  const onRequest = async query => {
    if (query === '') return;
    const res = await movieServices.getMovieSearch(query);
    setMovies(res);
    sessionStorage.setItem('search', JSON.stringify(res));
  };

  const handlSubmit = ({ search }, action) => {
    setQuery(search);
    onRequest(search);

    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <main>
      <Formik initialValues={{ search: '' }} onSubmit={handlSubmit}>
        <Form>
          <label>
            <Field type="text" name="search" />
          </label>
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {location.search !== '' ? (
        <MovieList movies={movies} />
      ) : (
        <MovieList movies={[]} />
      )}
    </main>
  );
};
