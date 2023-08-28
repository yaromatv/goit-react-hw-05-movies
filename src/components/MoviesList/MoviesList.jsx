import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { StyledDiv } from './MoviesList.style';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <StyledDiv>
      {data.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          key={movie.id}
        >
          {movie.title}
        </Link>
      ))}
    </StyledDiv>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
