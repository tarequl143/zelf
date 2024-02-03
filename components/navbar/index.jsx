'use  client';

import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from './styles.module.css'
import { Button } from '../button';
import Image from 'next/image';

const NavBar = () => {
  const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) =>  !prev);
  }

  return (
    <header className={styles.navbar}>
        <div className='container flex items-center justify-between'>
            {!isLoading && !user && (
              <>
                <div>
                  <Image
                    src="/assets/img/logo.png"
                    width={38}
                    height={18}
                    alt="Logo"
                  />
                </div>
                <div className={styles.navbarRight}>
                  <a href="/api/auth/login"
                    className={styles.loginAnchor}>
                    Sign in
                  </a>
                  <Button text="Join" />
                </div>
              </>
            )}
            {user && (
              <>
              <div>
                <Image
                  src="/assets/img/colored-logo.png"
                  width={49}
                  height={23}
                  alt="Logo"
                />
              </div>

              <div className={styles.navbarRight}>
                <Image
                  src={user?.picture ? user.picture : "/assets/img/user.png"}
                  width={32}
                  height={32}
                  alt="User Image"
                  onClick={toggleDropdown}
                />
                {isOpen &&
                  <ul className={styles.accountDropdown}>
                    <li><a href="/api/auth/logout">Logout</a></li>
                  </ul>
                }
              </div>
              </>
            )}
        </div>
    </header>
  );
};

export default NavBar;
