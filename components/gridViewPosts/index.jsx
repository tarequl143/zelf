import React from 'react';
import styles from "./styles.module.css";
import { TableRaw } from '../singlePost/TableRaw';
import useFetch from '../../hook/useFetch';
import { GridViewPost } from '../singlePost/GridViewPost';

const GridViewPosts = () => {
  const {data, isLoading, error} = useFetch();
  console.log("datasss", data);
  return (
    <div className={styles.postsWrapper}>
      {data?.length ?
          data.map((post, index) =>
            <GridViewPost key={index} title={post?.author?.username} postImg={post?.media?.url} creator={`@${post?.creator?.username}`} platform={post?.author?.info?.platform} view={`${Math.floor(post?.stats?.views_count / 1000) || "--"}k`} likes={`${Math.floor(post?.stats?.likes_count / 1000) || "--"}k`} comments={`${Math.floor(post?.stats?.comments_count / 1000) || "--"}k`}  />
          )
          : <div>"No post found!"</div>
        }
    </div>
  )
};

export default GridViewPosts;
