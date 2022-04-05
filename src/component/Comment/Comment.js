import React from 'react';

const Comment = (props) => {
    const {name, revews,ratings}= props.comment;
    return (
        <div className='container text-center mt-5 border border-primary w-50 p-2 mb-5'>
            <div className='row'>
            <div className='col-sm-12'>
                <h4>name:{name}</h4>
                <p>revews:{revews}</p>
                <p>ratings:{ratings}</p>
            </div>
           
            </div>
            
            </div>
    );
};

export default Comment;