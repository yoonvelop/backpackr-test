import React from 'react';
import styles from '../../styles/components/cards/Card.module.css';
import { CardItem } from '../../types/card';
import classNames from 'classnames';
import Ratings from './Ratings';

type CardProps = CardItem & { row?: boolean };

const Card: React.FC<CardProps> = ({
  imageUrl,
  label,
  title,
  crossText,
  highlight,
  description,
  rating,
  row,
}) => {
  return (
    <div className={classNames(styles.card, { row: row })}>
      {/* 이미지 */}
      <div
        className={styles['card-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={`${title} 이미지`}
      />
      {/* 상단 영역 (라벨,타이틀) */}
      <div className={styles['card-content']}>
        {label && <div className={styles['card-label']}>{label}</div>}
        <span className={styles['card-title']}>{title}</span>
        <div className={styles['card-text']}>
          <span className={styles.highlight}>{highlight}</span>
          <span className={styles['cross-text']}>{crossText}</span>
        </div>
      </div>
      {/* 옵션 영역 (별점,설명)*/}
      {(description || rating) && (
        <div className={styles['card-option']}>
          {rating && <Ratings rating={rating} />}
          {description && (
            <p className={styles['card-description']}>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
