import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList.map(movie => {
        const { id, title } = movie;
        return (
          <li key={id}>
            <Link
              className="link"
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <h2>{title}</h2>
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
