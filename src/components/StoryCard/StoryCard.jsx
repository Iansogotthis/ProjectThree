import React from "react";
import "./StoryCard.css";
import { Link } from "react-router-dom";
import NewComment from "../NewComment/NewComment";

export default function StoryCard({ story }) {
  return (
    <div className="story-card">
      <Link to={`/story/${story._id}`}>
        <h2>{story.title}</h2>
      </Link>
      <h3>By: {story.authorName}</h3>
      <p>{story.story}</p>
      <p className="emotion">Emotion: {story.emotion}</p>
      <p className="likes">Likes: {story.likes}</p>
      <h3>Comments:</h3>
      {story.comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.user}</p>
          <p>{comment.comment}</p>
          <p>{comment.posted}</p>
        </div>
      ))}
     
    </div>
  );
}
