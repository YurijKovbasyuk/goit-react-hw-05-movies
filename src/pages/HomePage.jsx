import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { getTrendingTodayAPI } from '../API/API';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingTodayAPI().then(data => {
      setMovieList(data);
      console.log(data);
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
