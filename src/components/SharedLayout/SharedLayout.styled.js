import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: black;
  display: block;
    padding: 5px;
   
}
  &.active {
    background-color: orange;
     border-radius: 9px;
     color: white;
  }
`;

export const Container = styled.div`
   max-width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
    margin: o auto;
    margin: 0 auto;
}
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.li`
  font-size: 32px;
`;

export const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;

  box-shadow: 11px 9px 17px -9px rgba(0, 0, 0, 0.75);
`;
