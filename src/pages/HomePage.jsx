import { useState, useEffect } from 'react';

import TrendingList from 'components/MoviesList';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const url =
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
          // console.log(data.results);
          setData(data.results);
        })
        .catch(err => console.error('error:' + err));
    }

    fetchTrending();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <TrendingList data={data} />
    </main>
  );
};

export default HomePage;
