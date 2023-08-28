import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
import {
  StyledDivFlex,
  StyledDivInfo,
  StyledDivAddInfo,
} from './MovieDetails.styled';

const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = ({ data }) => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  const year = release_date?.slice(0, 4);
  const poster = poster_path ? IMG_BASE + poster_path : '';

  const genreNames = genres?.map(genre => genre.name);
  const formattedGenres = genreNames?.join(', ');

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <StyledDivFlex>
        <img src={poster} alt="poster" width="300px" height="450px" />
        <StyledDivInfo>
          <h2>
            {title} ({year})
          </h2>
          <p>User score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{formattedGenres}</p>
        </StyledDivInfo>
      </StyledDivFlex>
      <StyledDivAddInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </StyledDivAddInfo>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default MovieDetails;
