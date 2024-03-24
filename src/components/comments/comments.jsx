import React from 'react';
import './Comments.css';

const Comments = ({ comments }) => {
  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <h3 className="comment-user">{comment.user}</h3>
          <p className="comment-text">{comment.comment}</p>
          <p className="comment-date">Posted on: {new Date(comment.posted).toLocaleDateString('en-US')}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;