/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import styles from './carousel.module.css';

import Card from '../carouselCard/CarouselCard';

const Carousel = ({ cardArray }) => {
  const [activeCard, changeActiveCard] = useState(0);

  return (
    <div className={styles.carousel_parent}>
      <div className={styles.card_container}>
        {cardArray.map((card, index) => (
          <div
            className={
              activeCard === index ? styles.carousel_card_front : styles.carousel_card_back
            }
          >
            <Card
              image={card.image}
              comment={card.comment}
              name={card.name}
              designation={card.designation}
            />
          </div>
        ))}
      </div>
      <div className={styles.controller_container}>
        {cardArray.map((card, index) => (
          <button
            type="button"
            className={index === activeCard ? styles.bullet_active : styles.bullet_inactive}
            onClick={() => changeActiveCard(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
