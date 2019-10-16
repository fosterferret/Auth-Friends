import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, postData } from '../redux/actions';


const initialFormState = {
    name: "",
    age: "",
    email: ""
}

export default function AddFriend() {
  const [newFriend, setNewFriend] = useState(initialFormState);
  const isPosting = useSelector(state => state.isPosting);
  const dispatch = useDispatch();

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewFriend({ ...newFriend, id: Date.now() });
    dispatch(postData(newFriend));
    setNewFriend(initialFormState)
  };

  useEffect(() => dispatch(fetchData()), [isPosting]);

  return (
    <div>
      <h2>Add a New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          value={newFriend.name}
        />
        <input
          type='text'
          name='age'
          placeholder='Age'
          onChange={handleChange}
          value={newFriend.age}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={newFriend.email}
        />
        <button>Add New Friend!</button>
      </form>
    </div>
  );
}
