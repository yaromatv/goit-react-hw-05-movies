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

export default MoviesList;
