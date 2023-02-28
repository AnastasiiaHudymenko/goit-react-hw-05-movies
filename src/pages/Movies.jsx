import { Formik, Form, Field } from 'formik';
import { useSearchParams } from 'react-router-dom';

import { MovieList } from '../components/MovieList/MovieList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handlSubmit = ({ search }, action) => {
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
      <MovieList query={search} />
    </main>
  );
};
