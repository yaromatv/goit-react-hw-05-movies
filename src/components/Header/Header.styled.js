import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;

  text-decoration: none;
  color: #000000;
  font-size: 24px;
  padding: 20px;

  transition: all 0.3s;

  &.active {
    color: red;
  }
`;

export const StyledNav = styled.nav`
  border-bottom: 1px solid #000000;
`;
