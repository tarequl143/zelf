'use  client';

import React from 'react';
import styles from './styles.module.css'

export const Button = ({text, onClick}) => {

  return (
    <button className={styles.primaryButton} onClick={onClick}>{text}</button>
  );
};
