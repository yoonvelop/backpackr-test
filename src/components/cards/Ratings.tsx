import React from 'react';
import styles from '../../styles/components/cards/Ratings.module.css';
import classNames from 'classnames';
type RatingProps = {
  rating: number;
};

const Ratings: React.FC<RatingProps> = ({ rating }) => {
  const ratingElements = [];
  for (let i = 0; i < 5; i++) {
    ratingElements.push(
      <span
        key={i}
        className={classNames(styles.rating, { [styles.filled]: i < rating })}
        aria-hidden="true"
      />,
    );
  }
  return (
    <div className={styles['card-ratings']} aria-label={`별점: ${rating} / 5`}>
      {ratingElements}
    </div>
  );
};

export default Ratings;
