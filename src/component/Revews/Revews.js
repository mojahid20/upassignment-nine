import React from 'react';
import Comment from '../Comment/Comment';

const Revews = () => {
    const Comments=[
        
        {id:1, name:'jhon',revews:'good', ratings:3.5},
        {id:2, name:'jibon',revews:' not better', ratings:4.7},
        {id:3, name:'moron',revews:'not good', ratings:5.00}, 
        {id:3, name:'alomgir',revews:' i think  this is best', ratings:4.5}, 
        {id:3, name:'jamal',revews:'best', ratings:4.3}, 
        {id:3, name:'kamal',revews:'most costabl and  best', ratings:5.00}, 
        
    ]
    return (
        <div>
            <h3 className='text-center mt-4 bg-dark p-5 text-white w-50 mx-auto'>What client Says!!</h3>
           {
               Comments.map(comment=> <Comment key={comment.id} comment={comment}></Comment>)
           }
        </div>
    );
};

export default Revews;