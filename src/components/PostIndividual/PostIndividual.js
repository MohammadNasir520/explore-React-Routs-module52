import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const PostIndividual = ({post}) => {
const {id,title,body}=post;
const navigate= useNavigate();
const handleNavigate=()=>{
    navigate(`/post/${id}`)
};
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
           <Link to={`/post/${id}`}> <button> Show Details</button></Link>
           <button onClick={handleNavigate}>Show Details by navigate</button>
        </div>
    );
};

export default PostIndividual;