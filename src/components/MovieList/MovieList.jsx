import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              className="link"
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <h2>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
};

export default MovieList;
