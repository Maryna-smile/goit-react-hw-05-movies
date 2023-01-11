import { Outlet } from 'react-router-dom';
import { Container, Header, NavItem, NavList } from './Layout.styled';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavItem to="/">Home</NavItem>
            </li>
            <li>
              <NavItem to="/movies">Movies</NavItem>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
