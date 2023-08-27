import { Link } from 'react-router-dom';
import { StyledDiv } from './TrendingList.style';

const TrendingList = ({ data }) => {
  return (
    <StyledDiv>
      <h2>Trending today</h2>
      {data.map(movie => (
        // <li key={movie.id}>{movie.title}</li>
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          {movie.title}
        </Link>
      ))}
    </StyledDiv>
  );
};

export default TrendingList;

// to={`/movies/${movie.id}`}
