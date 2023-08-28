import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from 'components/Loading';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

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
          setIsDataFetched(true);
        })
        .catch(err => console.error('error:' + err));
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {isDataFetched ? (
        data.length > 0 ? (
          <ul>
            {data.map(({ author, content, id }) => (
              <div key={id}>
                <li>
                  <b>Author: {author}</b>
                </li>
                <p>{content}</p>
              </div>
            ))}
          </ul>
        ) : (
          <p>There are no reviews for this movie yet.</p>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Reviews;
