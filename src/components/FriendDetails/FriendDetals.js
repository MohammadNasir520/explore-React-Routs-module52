import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetals = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h4>Details about: { friend.name}</h4>
            <p>call him/her: {friend.phone}</p>
            <h2> Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetals;