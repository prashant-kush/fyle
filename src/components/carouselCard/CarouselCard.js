import React from 'react';

import styles from './carouselCard.module.css';

const Card = ({ image, comment, name, designation }) => {
  return (
    <div className={styles.card_parent}>
      <div className={styles.card_image_container}>
        <div
          className={styles.card_image}
          style={{
            backgroundImage: `url(${image})`,

            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className={styles.comment_container}>
        <p className={styles.comment}>{comment}</p>
        <span className={styles.name_container}>
          <p className={styles.name}>{name}</p>
          <p className={styles.designation}>{designation}</p>
        </span>
      </div>
    </div>
  );
};
export default Card;
