import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  StyledForm,
  StyledInput,
  BtnSearch,
  Errormsg,
} from './Moviee.styled';
import MovieList from '../components/MovieList/MovieList';

const SignupSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handlSubmit = ({ search }, action) => {
    const nextParams = search !== '' ? { search } : {};

    setSearchParams(nextParams);

    action.resetForm();
  };

  return (
    <main>
      <Container>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={handlSubmit}
          validationSchema={SignupSchema}
        >
          <StyledForm>
            <label>
              <StyledInput type="text" name="search" />
              <ErrorMessage name="search">
                {msg => <Errormsg>{msg}</Errormsg>}
              </ErrorMessage>
            </label>
            <BtnSearch type="submit">
              <BsSearch size={40} fill={'orange'} />
            </BtnSearch>
          </StyledForm>
        </Formik>
        <MovieList query={search} />
      </Container>
    </main>
  );
};

export default Movies;
