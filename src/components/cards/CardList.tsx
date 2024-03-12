import React from 'react';
import styles from '../../styles/components/cards/CardList.module.css';
import { CardItem } from '../../types/card';
import Card from './Card';

type CardProps = { cards: CardItem[] };

const CardList: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className={styles['card-container']}>
      {cards.map((card, index) => (
        <Card
          key={`card-${index}`}
          imageUrl={card.imageUrl}
          label={card.label}
          title={card.title}
          crossText={card.crossText}
          highlight={card.highlight}
          description={card.description}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default CardList;
