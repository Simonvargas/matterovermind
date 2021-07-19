import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from'./Navigation.module.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className={styles.dropdown}>
              <i className="far fa-user-circle fa-4x"></i>
            <div className={styles.dropdownContent}>
              <Link className={styles.links} to='/login'>Log in</Link>
              <Link className={styles.links} to='/signup'>Sign up</Link>
              </div>
      </div>
      </>
    );
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.homediv}>
        <Link exact to="/">
        <img alt='logo' src='https://i.imgur.com/BTfD1Ny.png?1' className={styles.logo}></img>
        </Link>
        <div className={styles.searchBar}>
          <input type="text" class={styles.input} placeholder="Begin Your Search" className={styles.bar}></input>
          <button type="submit" class={styles.searchButton}>
            <i class="fa fa-search"></i>
        </button>  
        </div>
        {isLoaded && sessionLinks}
        </div>
    </nav>
  );
}

export default Navigation;