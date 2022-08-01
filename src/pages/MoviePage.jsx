import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getMoviesListBySearchAPI } from '../API/API';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
  const [input, setInput] = useState('');
  const [movieList, setMovieList] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const search = qs.parse(location.search);
  const { query } = search;

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input) return;
    navigate({ pathname: '/movies', search: '?query=' + input });
  };

  useEffect(() => {
    query &&
      getMoviesListBySearchAPI(query).then(data => {
        setMovieList(data);
      });
  }, [query]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          paddingBottom: '22px',
        }}
      >
        <input onChange={handleChange} type="text" value={input} />
        <button type="submit">Search</button>
      </form>
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </>
  );
};

export default MoviesPage;
