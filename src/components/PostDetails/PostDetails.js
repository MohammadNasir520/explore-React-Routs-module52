import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const {id,title,body,userId}=post;
    console.log(post)

    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>Details about post {id}</h3>
            <p>Title : {title}</p>
            <p>Post :   <small>{body}</small></p>

             <button onClick={handleNavigate}>Get the Author</button>
        </div>
    );
};

export default PostDetails;