import React from 'react';

import styles from './switch.module.css';

const Switch = ({ toggleSwitch, value }) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={e => toggleSwitch(e.target.checked)}
        checked={value}
      />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};
export default Switch;
