import { StyledNavLink, StyledNav } from './Header.styled';

const Header = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
};

export default Header;
