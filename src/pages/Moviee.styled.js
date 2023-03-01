import styled from 'styled-components';
import { Form, Field } from 'formik';
export const Container = styled.div`
   max-width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
    margin: o auto;
    margin: 0 auto;
}
`;

export const StyledForm = styled(Form)`
  margin-bottom: 60px;
  position: relative;
`;

export const StyledInput = styled(Field)`
  width: 50%;
  height: 34px;
  /* border-radius: 4px; */
  border: none;
  border-bottom: 1px solid orange;
  padding-left: 20px;
  font-size: 18px;
  outline: none;
`;
export const BtnSearch = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  margin-left: -47px;
  cursor: pointer;
`;

export const Errormsg = styled.span`
  position: absolute;
  bottom: -25px;
  left: 0;
  font-size: 20px;
  font-style: italic;
  color: red;
`;
