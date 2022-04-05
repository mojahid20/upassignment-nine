import React from 'react';
import './Hompage.css';
import logo from '../../image/images (3).jpg'
import Revew from '../Revew/Revew';
import { Link } from 'react-router-dom';

const Hompage = () => {
    const revews=[
        {id:1, name:'jhon',comments:'good', ratings:3.5},
        {id:2, name:'jibon',comments:'better', ratings:4.5},
        {id:3, name:'moron',comments:'best', ratings:5.00},
    ]
    return (
        <div>
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
        <div>
            <h1 className='text-center mt-5'>Coustomer revews</h1>
            {
                revews.map(revew=> <Revew key={revew.id}
                    revew={revew}
                
                ></Revew>)
            }
            <div className='d-grid gap-2 col-2 mx-auto mb-4 '>
            <Link to='/revews' ><button class="btn btn-primary" type="button">See All Revews</button></Link>
             
  
             </div>
        </div>
        
        </div>
        

        
    );
};

export default Hompage;