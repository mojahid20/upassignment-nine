import React from 'react';

const Revew = (props) => {
    const {name, comments,ratings}=props.revew
    return (
        <div >
           
           <div>
           <div className='container text-center mt-5 border border-primary w-50 p-2 mb-5'>
            <div className='row'>
            <div className='col-sm-12'>
                <h4>name:{name}</h4>
                <p>comment:{comments}</p>
                <p>ratings:{ratings}</p>
            </div>
           
            </div>
            
            </div>
           </div>
           
           
           
        </div>
        
    );
};

export default Revew;