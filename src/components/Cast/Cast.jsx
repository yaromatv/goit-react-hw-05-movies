import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';

const IMG_BASE = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchActors() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmJhZWQzNTUzODdkN2ZiYzZlMWQ0ZjExZTk4NjVjNSIsInN1YiI6IjY0ZTVkMjcyMWZlYWMxMDBmZTViNGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VPn_06gy6JLjJS1qAYO3AhT_DXJopeUwXitvlBGTp1U',
        },
      };

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          setData(data.cast);
          setIsDataFetched(true);
        })
        .catch(err => console.error('error:' + err));
    }

    fetchActors();
  }, [movieId]);

  return (
    <>
      {isDataFetched ? (
        data.length > 0 ? (
          data.map(({ profile_path, name, character }) => (
            <div key={`${name} - ${character}`}>
              {profile_path ? (
                <img
                  src={`${IMG_BASE}${profile_path}`}
                  alt={`${name} - ${character}`}
                  width="200px"
                />
              ) : (
                <div>No Image Available</div>
              )}
              <li>{name}</li>
              <p>Character: {character}</p>
            </div>
          ))
        ) : (
          <p>No cast information available</p>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
