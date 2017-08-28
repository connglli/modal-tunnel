import React from 'react';
import { Link } from 'dva/router';
import styles from './common.scss';

const Nav = ({ children }) => (<div>
  <div style={{ width: '100%' }} />
  <div className={styles.nav}>
    <Link to="/index">Index Page</Link>
    <Link to="/second">Second Page</Link>
  </div>
  <div>
    { children }
  </div>
</div>);

export default Nav;
