import React, { useState } from 'react';

export default function RandomStoryPage() {
  const [story, setStory] = useState(null);

  const fetchRandomStory = async () => {
    const response = await fetch('/api/stories'); 
    const data = await response.json();
    setStory(data);
  };

  return (
    <div>
      <button onClick={fetchRandomStory}>Get Random Story</button>
      {story && (
        <div>
          <h2>{story.title}</h2>
          <p>{story.story}</p>
        </div>
      )}
    </div>
  );
}