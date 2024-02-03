'use  client';

import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link';

export const AnchorButton = ({text, href}) => {

  return (
    <Link className={styles.anchorButton} href={href}>{text}</Link>
  );
};

