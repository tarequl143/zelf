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
          data.map((post) =>
            <GridViewPost key={post?.content?.uuid} title={post?.content?.title} postImg={post?.content?.thumbnail_url} creator={`@${post?.creator?.name}`} platform={post?.creator?.platform} view={`${Math.floor(post?.content?.views / 1000)}k`} likes={`${Math.floor(post?.content?.total_engagement / 1000)}k`} comments={`${(post?.content?.engagement_of_views * 100).toFixed(2)}%`}  />
          )
          : <div>"No post found!"</div>
        }
    </div>
  )
};

export default GridViewPosts;
