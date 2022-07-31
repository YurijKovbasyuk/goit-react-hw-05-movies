import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import BtnGoBack from '../components/BtnGoBack/BtnGoBack';
import { getOneMovieByIdAPI } from '../API/API';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const params = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  useEffect(() => {
    getOneMovieByIdAPI(params.movieId).then(setMovie);
  }, [params.movieId]);

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
  const { poster_path, title, vote_averag, overview, genres } = movie;
  return (
    <>
      <BtnGoBack />
      <div style={oneMovie}>
        <img src={poster_path && imgUrl + poster_path} alt="" width="20%" />
        <div style={textOfMovie}>
          <h2>{title}</h2>
          <p>User Score {vote_averag}</p>
          <h3>Overvies</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres?.map(genre => {
              const { id, name } = genre;
              return <li key={id}>{name}</li>;
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
            state: { from: location?.state?.from || '/' },
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
            state: { from: location?.state?.from || '/' },
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
