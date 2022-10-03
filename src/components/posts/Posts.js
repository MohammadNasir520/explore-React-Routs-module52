import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostIndividual from '../PostIndividual/PostIndividual';


const Posts = () => {
    const posts=useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2>a lot of posts here</h2>
            {
                posts.map(post=><PostIndividual 
                    key={post.id}
                post={post}
                ></PostIndividual> )
            }
        </div>
    );
};

export default Posts;