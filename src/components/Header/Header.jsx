import { StyledNavLink, StyledNav } from './Header.styled';
// import css from './Header.module.css';

const Header = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
};

export default Header;
