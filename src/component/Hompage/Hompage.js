import React from 'react';
import './Hompage.css';
import logo from '../../image/images (3).jpg'

const Hompage = () => {
    return (
        <div className='hompage'>
            <div className='left'>
                <h1>Most costable perfume</h1>
                <p>I like perfume a lot, If you use perfume, <br /> your mind stays calm
                And using this perfume is a circumcision <br />,We use perfume when it breaks down <br />We should all use perfume
                </p>
            </div>
            <div className='right'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Hompage;