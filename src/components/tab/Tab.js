import React from 'react';

import styles from './tab.module.css';

const Tab = ({ active, text, changeTab, quantity }) => {
  return (
    <button
      type="button"
      className={active ? styles.tab_parent_active : styles.tab_parent_inactive}
      onClick={() => {
        changeTab(quantity);
      }}
    >
      {text}
    </button>
  );
};
export default Tab;
