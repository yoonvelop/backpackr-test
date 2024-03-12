import React, { useRef } from 'react';
import styles from '../../styles/components/cards/Card.module.css';
import { CardItem } from '../../types/card';
import classNames from 'classnames';
import Ratings from './Ratings';
import useEllipsisText from '../../hooks/useEllipsisText';

type CardProps = CardItem & { isRow?: boolean };

const Card: React.FC<CardProps> = ({
  imageUrl,
  label,
  title,
  crossText,
  highlight,
  name,
  description,
  rating,
  isRow,
}) => {
  // css로 ...처리는 IE를 지원하지 않아 계산하는 hooks를 만들어 사용
  const descRef = useRef<HTMLParagraphElement>(null); // 설명 element
  useEllipsisText(descRef, description ? description : '', isRow ? 3 : 1);

  const rowTitleRef = useRef<HTMLDivElement>(null); // 가로형 제목 element
  useEllipsisText(rowTitleRef, isRow ? title : '', 1);

  return (
    <div className={classNames(styles.card, { [styles.row]: isRow })}>
      {/* 이미지 */}
      <div
        className={styles['card-image']}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={`${title} 이미지`}
      />
      {isRow ? (
        // 가로형 컨텐츠
        <div className={styles['card-content']}>
          <div className={styles['card-title']} ref={rowTitleRef} />
          <p className={styles['card-description']} ref={descRef} />
          <div className={styles['row-option-box']}>
            {rating && <Ratings rating={rating} />}
            <span className={styles['name']}>{name}</span>
          </div>
        </div>
      ) : (
        // 세로형 컨텐츠
        <>
          {/* 상단 영역 (라벨,타이틀) */}
          <div className={styles['card-content']}>
            {label && <div className={styles['card-label']}>{label}</div>}
            <span className={styles['card-title']}>{title}</span>
            <div className={styles['card-text']}>
              {highlight && (
                <span className={styles.highlight}>{highlight}</span>
              )}
              <span className={styles['cross-text']}>{crossText}</span>
            </div>
          </div>
          {/* 옵션 영역 (별점,설명)*/}
          {(description || rating) && (
            <div className={styles['card-option']}>
              {rating && <Ratings rating={rating} />}
              {description && (
                <p className={styles['card-description']} ref={descRef} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
