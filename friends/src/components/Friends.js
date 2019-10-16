import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Friend from './Friend';
import { fetchData } from '../redux/actions';

export default function FriendsList() {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), []);

  return (
    <div>
      <h2>My Friends</h2>
      <div>
        {data.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
