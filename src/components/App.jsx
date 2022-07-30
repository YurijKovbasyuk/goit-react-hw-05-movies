import { Navigate, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from '../pages/MovieDetailPage';
import './index.module.css';
import MainMenu from './MainMenu/MainMenu';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// import MoviesPage from '../pages/MoviePage';
// import HomePage from '../pages/HomePage';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviePage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Suspense fallback={<div>Loading...</div>}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
          </Suspense>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
