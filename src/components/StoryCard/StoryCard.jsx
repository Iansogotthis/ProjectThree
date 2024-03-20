import React from 'react';
import './StoryCard.css';

export default function StoryCard({ story }) {
  return (
    <div className="story-card">
      <h2>{story.title}</h2>
      <h3>By: {story.authorName}</h3>
      <p>{story.story}</p>
      <p className="emotion">Emotion: {story.emotion}</p>
    </div>
  );
}