import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css'

const Friend = ({friend}) => {
    const {id,name,email,username}=friend;
    console.log(friend)
    return (
        <div className='friend' >
            <h3>Name: {name}</h3>
            <p>email: {email}</p>
            <p><small>username: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;