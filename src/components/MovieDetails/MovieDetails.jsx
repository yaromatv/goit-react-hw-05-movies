const IMG_BASE = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = ({ data }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    data;

  const year = release_date?.slice(0, 4);
  const poster = poster_path ? IMG_BASE + poster_path : '';

  const genreNames = genres?.map(genre => genre.name);
  const formattedGenres = genreNames?.join(', ');

  return (
    <>
      <div>
        <img src={poster} alt="poster" width="300px" height="450px" />
        <div>
          <h2>
            {title} ({year})
          </h2>
          <p>User score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{formattedGenres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
