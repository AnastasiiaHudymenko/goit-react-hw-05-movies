import { Formik, Form, Field } from 'formik';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handlSubmit = ({ search }, action) => {
    const nextParams = search !== '' ? { search } : {};

    setSearchParams(nextParams);
    console.log(search);
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
      <MovieList query={search} />
    </main>
  );
};

export default Movies;
