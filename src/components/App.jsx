import { Routes, Route } from 'react-router-dom';
// import 'reset-css';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import LayOut from 'components/LayOut';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
