import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MovieDetails from 'components/MovieDetails';
import Loading from 'components/Loading';

const MovieDetailsPage = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  const loaded = Object.keys(data).length > 0;

  useEffect(() => {
    async function fetchMovie() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
          setData(data);
        })
        .catch(err => console.error('error:' + err));
    }

    fetchMovie();
  }, [movieId]);

  return <main>{loaded ? <MovieDetails data={data} /> : <Loading />}</main>;
};

export default MovieDetailsPage;
