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

  max-width: 1280px;
  padding-left: 15px;
  padding-right: 15px;
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
  margin-left: 20px;
`;

export const ListCastReviews = styled.ul`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Container = styled.div`
   max-width: 1280px;
    padding-left: 15px;
    padding-right: 15px;

    margin: 0 auto;
}
`;

export const DivMain = styled.div`
  box-shadow: 11px 9px 17px -9px rgba(0, 0, 0, 0.75);
`;
