import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/SearchBar';
import MoviesList from 'components/MoviesList';

const MoviesPage = () => {
  const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function fetchQuery() {
      const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;

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
          setData(data.results);
        })
        .catch(err => console.error('error:' + err));
    }

    fetchQuery();
  }, [movieName]);

  const submitQuery = word => {
    setSearchParams({ query: word });
  };

  return (
    <main>
      <Searchbar onSubmit={submitQuery} />
      <MoviesList data={data} />
    </main>
  );
};

export default MoviesPage;
