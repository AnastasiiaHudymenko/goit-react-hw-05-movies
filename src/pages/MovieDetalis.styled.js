import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
 color: black;
 
   
}
  &.active {
    
     color: orange;
  }


`;
export const WrapperContent = styled.div`
  display: flex;
  gap: 30px;

  max-width: 100%;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const BtnGoBack = styled.button`
  border: none;
  padding: 12px;
  width: 116px;
  border-radius: 4px;
  margin-top: 13px;
  background-color: orange;
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ListCastReviews = styled.ul`
  border-top: 1px solid grey;
  display: flex;
  gap: 20px;
  padding: 10px 0;
`;

export const Item = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;
