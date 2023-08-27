import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h2>404</h2>
      Go back to <Link to="/">Home</Link>
    </main>
  );
};

export default NotFoundPage;
