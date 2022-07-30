// import css from './index.module.css';

// const Home = trendingMovies => {
//   const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
//   console.log(trendingMovies);
//   return (
//     <div>
//       <h1>Trending today</h1>
//       <ul className={css.items}>
//         {trendingMovies.trendingMovies.map(movie => (
//           <li className={css.item} key={movie.id}>
//             <img
//               className={css.imgApp}
//               src={`${IMG_BASE_URL}${movie.backdrop_path}`}
//               alt=""
//             />
//             <p className={css.title}>{movie.title}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { getTrendingTodayAPI } from '../API/API';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingTodayAPI().then(data => {
      setMovieList(data);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movieList={movieList} />
    </>
  );
};

export default HomePage;
