import React from 'react';

export default function FriendCard({friend}) {

  return (
    <div>
      <h3>{friend.name}</h3>
      <p>Age: {friend.nickname}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
}