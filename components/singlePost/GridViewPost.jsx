import React from 'react';
import styles from "./styles.module.css";
import Image from 'next/image';

export const GridViewPost = ({title, postImg, creator, platform, view, likes, comments}) => (

  <div className={styles.gridViewPostWrapper}>
    <div className={styles.gridViewPostContent}>
    <div className={styles.postImage}>
      <Image
        src={postImg}
        width={225}
        height={280}
        alt="Post Image"
      />
    <div className={styles.postBar}>
      <div className={styles.postAuthor}>
        <Image
          src="/assets/img/creator.png"
          width={24}
          height={24}
          alt="Creator"
        />
        <span className={styles.postTitle}>{title}</span>
      </div>
      <Image
        src={platform === "instagram" ? "/assets/img/insta.png" : "/assets/img/insta-circle.png"}
        width={24}
        height={24}
        alt="Play Icon"
      />
    </div>
    </div>
    <div className={styles.postMeta}>
      <div className={styles.postSingleMeta}>
        <Image
          src="/assets/img/eye.png"
          width={15}
          height={10}
          alt="View"
        />
        {view}
      </div>
      <div className={styles.postSingleMeta}>
        <Image
          src="/assets/img/like.png"
          width={15}
          height={10}
          alt="View"
        />
        {likes}
      </div>
      <div className={styles.postSingleMeta}>
        <Image
          src="/assets/img/comment.png"
          width={15}
          height={10}
          alt="View"
        />
        {comments}
      </div>
    </div>
    </div>
  </div>
);
