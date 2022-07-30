import './index.module.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviePage';
import MovieDetailsPage from '../pages/MovieDetailPage';
import MainMenu from './MainMenu/MainMenu';
// import { Suspense } from 'react';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <MainMenu />
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movie" element={<MoviesPage />}>
          <Route path="movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
      {/* </Suspense> */}
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
