import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0 0 5px 1px #7bd4eb;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  background: #283739;
  list-style: none;
  padding: 20px;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px #7bd4eb;
  &.active {
    color: #a9c52f;
    box-shadow: 0 0 19px 3px #a9c52f;
`;

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding-top: 5%;
  padding-bottom: 10%;
`;
