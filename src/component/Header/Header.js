import React from 'react';
import './Header.css';

import Coustomlink from '../Coustomlink/Coustomlink';

const Header = () => {
    return (
        <div className='bg-dark p-4 text-center'>
            <div className='main-nav'>
              <Coustomlink to='/' >Home</Coustomlink>
              <Coustomlink to='/revews' >Revews</Coustomlink>
              <Coustomlink to='/blogs' >Blogs</Coustomlink>
              <Coustomlink to='/dashboard' >Dashboard</Coustomlink>
              <Coustomlink to='/About' >About</Coustomlink>
            </div>
        </div>
    );
};

export default Header;