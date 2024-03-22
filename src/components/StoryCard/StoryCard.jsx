import React from "react";
import "./StoryCard.css";
import { Link } from "react-router-dom";

export default function StoryCard({ story, onDelete, onLike }) {
  
  return (
    <div className="story-card">
      <Link to={`/story/${story._id}`}>
        <h2>{story.title}</h2>
      </Link>
      
      <h3>By: {story.authorName}</h3>
     
      <p>{story.story}</p>
      
      <p className="emotion">Emotion: {story.emotion}</p>
      
      <p className="likes">Likes: {story.likes}</p>
      
      <button onClick={() => onLike(story._id)}>Like</button>
      <button onClick={() => onDelete(story._id)}>Delete</button>
      
      <h3>Comments:</h3>
      {story.comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="comment-user">{comment.user}</p>
          <p className="comment-text">{comment.comment}</p>
          <p className="comment-date">{comment.posted}</p>
        </div>
      ))}
    </div>
  );
}