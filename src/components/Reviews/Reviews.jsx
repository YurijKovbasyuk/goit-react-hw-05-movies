import { useEffect, useState } from 'react';
import { getReviewsByIdAPI } from '../../API/API';
import { useParams } from 'react-router-dom';

const Reviews = ({ id }) => {
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
        console.log(err);
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
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
