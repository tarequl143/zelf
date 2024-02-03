'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';
import { GridViewPosts, Login, TableViewPosts } from '../components';

export default function Index() {
  const { user, isLoading } = useUser();
  return (
    <>
      {!isLoading && !user && (
        <Login />
      )}
      {user && (
        <div className='container flex flex-col'>
          <TableViewPosts />
          <GridViewPosts />
        </div>
      )}
    </>
  );
}
