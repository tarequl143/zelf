'use client';

import './globals.css';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Footer, Login, NavBar } from '../components';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <UserProvider>
          <main id="app" className="page-wrapper">
            <NavBar />
            <div>{children}</div>
            <Footer />
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
