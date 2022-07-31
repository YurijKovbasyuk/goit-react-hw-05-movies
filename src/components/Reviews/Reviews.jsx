import { useEffect, useState } from 'react';
import { getReviewsByIdAPI } from '../../API/API';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsByIdAPI(movieId)
      .then(data => {
        if (data.length === 0) {
          throw new Error('Data is empty');
        }
        setReviews(data);
      })
      .catch(err => {
        setErr(err);
      });
  }, [movieId]);

  return (
    <>
      {err ? (
        <p>We don`t have any reviews for this time</p>
      ) : (
        <ul>
          {reviews.map(review => {
            const { content, author, id } = review;
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
