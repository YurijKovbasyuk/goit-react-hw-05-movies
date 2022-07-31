import { Navigate, Route, Routes } from 'react-router-dom';
import './index.module.css';
import React, { Suspense, lazy } from 'react';

const MainMenu = lazy(() => import('./MainMenu/MainMenu'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('../pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainMenu />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />

            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
