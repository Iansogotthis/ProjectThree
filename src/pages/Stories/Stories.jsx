import React, { useState } from 'react';
import './Stories.css';

export default function RandomStoryPage() {
  const [story, setStory] = useState(null);

  const fetchRandomStory = async () => {
    const response = await fetch('/api/stories/random'); 
    const data = await response.json();
    setStory(data);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={fetchRandomStory}>Get Random Story</button>
      </div>
      {story && (
        <div className="story-container">
          <h2 className="story-title">{story.title}</h2>
          <p className="story-text">{story.story}</p>
        </div>
      )}
    </div>
  );
}