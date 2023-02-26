import { Formik, Form, Field } from 'formik';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieServices from '../services/MovieServices';

export const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const movieServices = new MovieServices();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    onRequest(query);
    // eslint-disable-next-line
  }, [query]);

  const onRequest = async query => {
    if (query === '') return;
    const res = await movieServices.getMovieSearch(query);
    setMovies(res);
  };

  const handlSubmit = ({ search }, action) => {
    setQuery(search);
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
    searchParams.get('name');

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
      {query && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};
