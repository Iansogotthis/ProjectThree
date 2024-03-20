import React, { useState } from 'react';

const NewComment = ({ addComment }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ user, comment });
    setUser('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User:
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewComment;