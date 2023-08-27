import { Routes, Route } from 'react-router-dom';
// import 'reset-css';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import LayOut from 'components/LayOut';

// const API = '0bbaed355387d7fbc6e1d4f11e9865c5';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
