import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
          <p>Posted on: {new Date(comment.posted).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;