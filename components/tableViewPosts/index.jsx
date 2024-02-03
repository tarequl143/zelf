import React from 'react';
import styles from "./styles.module.css";
import { TableRaw } from '../singlePost/TableRaw';
import useFetch from '../../hook/useFetch';

const TableViewPosts = () => {
  const {data, isLoading, error} = useFetch();
  console.log("datasss", data);
  return (
    <table className={styles.postsTable}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Video</th>
          <th>Creator</th>
          <th>Platform</th>
          <th>Total Views</th>
          <th>Total engagement</th>
          <th>Engagement rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? <tr><td style={{padding: "16px",}} colSpan={8} align='center'>Loading...</td></tr> :
        data?.length ?
          data.map((post) => (
            <TableRaw key={post?.content?.uuid} date={new Date(post?.content?.timestamp).toLocaleDateString()} videoTitle={post?.content?.title} creator={`@${post?.creator?.name}`} platform={post?.creator?.platform} view={`${Math.floor(post?.content?.views / 1000)}k`} engagement={`${Math.floor(post?.content?.total_engagement / 1000)}k`} engageRate={`${(post?.content?.engagement_of_views * 100).toFixed(2)}%`}  />
          ))
          : <tr><td colSpan={8} align='center'>"No post found!"</td></tr>
        }
      </tbody>
    </table>
  )
};

export default TableViewPosts;
