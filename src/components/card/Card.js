import React from 'react';

import styles from './card.module.css';

const Card = ({ heading, totalPrice, timespan, serving, color }) => {
  return (
    <div className={styles.card_parent}>
      <h1 className={styles.card_h1}>{heading}</h1>
      <span className={styles.last_two_wrapper}>
        <h2 className={styles.card_h2} style={{ color }}>
          {totalPrice}
          <span className={styles.card_span}>{timespan}</span>
        </h2>
        <h3 className={styles.card_serving}>{serving}</h3>
      </span>
    </div>
  );
};
export default Card;
