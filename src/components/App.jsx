import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from '../pages/MovieDetailPage';
import MoviesPage from '../pages/MoviePage';
import './index.module.css';
import MainMenu from './MainMenu/MainMenu';
// import { Suspense } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

// const [trendingMovies, setTrendingMovies] = useState([]);
// // const [isLoading, setIsLoading] = useState(false);

// console.log(trendingMovies);

// const getMovies = async () => {
//   // if (!query) return;

//   try {
//     const data = await API.getTrendingMovies();
//     console.log(data.results[3]);
//     setTrendingMovies([...data.results]);

//   } catch (error) {

//     console.log('error', error.response.data);
//   }
// };
