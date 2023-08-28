import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  color: black;
  text-decoration: none;
  /* font-weight: 500; */
  /* text-transform: uppercase; */

  &:hover {
    color: red;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="14" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
