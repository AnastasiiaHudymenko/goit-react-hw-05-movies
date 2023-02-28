import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';
import {
  StyledLink,
  Container,
  List,
  NavItem,
  Header,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <NavItem>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              {' '}
              <StyledLink to="/movies">Movies</StyledLink>
            </NavItem>
          </List>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <MutatingDots
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
