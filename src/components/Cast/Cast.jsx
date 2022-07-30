import { useEffect, useState } from 'react';
import { getCastsByIdAPI } from '../../API/API';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  const { movieId } = useParams();

  useEffect(() => {
    getCastsByIdAPI(movieId)
      .then(data => {
        setCasts(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <ul>
        {casts?.map(author => {
          console.log(author);
          const { id, original_name, character, profile_path } = author;
          return (
            <li key={id}>
              <img
                src={profile_path && imgUrl + profile_path}
                alt=""
                width="150px"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
