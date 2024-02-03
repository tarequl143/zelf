import React from 'react';
import styles from "./styles.module.css";
import Image from 'next/image';

export const TableRaw = ({date, videoTitle, creator, platform, view, engagement, engageRate}) => (
  <tr className={styles.raw}>
    <td>
      <span className={styles.date}>{date}</span>
    </td>
    <td>
      <div className={styles.video}>
        <Image
          src="/assets/img/play-icon.png"
          width={11}
          height={14}
          alt="Play Icon"
        />
        <span>{videoTitle}</span>
      </div>
    </td>
    <td>
    <div className={styles.creator}>
        <Image
          src="/assets/img/creator.png"
          width={24}
          height={24}
          alt="Play Icon"
        />
        <span>{creator}</span>
      </div>
    </td>
    <td>
      <Image
        src={platform === "instagram" ? "/assets/img/insta.png" : "/assets/img/tiktok.png"}
        width={24}
        height={24}
        alt="Play Icon"
      />
    </td>
    <td>
      <span className={styles.text}>{view}</span>
    </td>
    <td>
      <span className={styles.text}>{engagement}</span>
    </td>
    <td>
      <span className={styles.text}>{engageRate}</span>
    </td>
    <td>
      <span className={styles.action}>View Post</span>
    </td>
  </tr>
);
