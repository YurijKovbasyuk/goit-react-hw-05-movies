/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import BtnGoBack from '../components/BtnGoBack/BtnGoBack';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';
import { getOneMovieByIdAPI } from '../API/API';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const params = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    getOneMovieByIdAPI(params.movieId).then(setMovie);
  }, []);

  const oneMovie = {
    padding: '10px 30px ',
    display: 'flex',
    justifyContent: 'start',
    boxShadow: '0 0 10px rgba(0,0,0,0.22)',
  };

  const textOfMovie = {
    padding: '10px 30px ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  };

  return (
    <>
      <BtnGoBack />
      <div style={oneMovie}>
        <img
          src={movie.poster_path && imgUrl + movie.poster_path}
          alt=""
          width="20%"
        />
        <div style={textOfMovie}>
          <h2>{movie.title}</h2>
          <p>User Score {movie.vote_averag}</p>
          <h3>Overvies</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '10px 30px',
        }}
      >
        <span
          style={{
            marginRight: '10px',
          }}
        >
          Additional informaintion
        </span>
        <Link
          style={{
            marginRight: '10px',
            textDecoration: 'none',
          }}
          to={{
            pathname: '/movies/' + params.movieId + '/cast',
            state: { from: location.state?.from || '/' },
          }}
        >
          Cast
        </Link>
        <Link
          style={{
            marginRight: '10px',
            textDecoration: 'none',
          }}
          to={{
            pathname: '/movies/' + params.movieId + '/reviews',
            state: { from: location.state?.from || '/' },
          }}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
