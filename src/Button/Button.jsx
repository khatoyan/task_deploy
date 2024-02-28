import React from 'react';

import styles from './Button.module.css';

export const Button = ({ disabled, className, onClick, children }) => {

  return (
    <button
      className={`${className} ${styles.button} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
