import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryCard from '../../components/StoryCard/StoryCard';
import NewComment from '../../components/NewComment/NewComment';
import './SingleStoryPage.css';

export default function SingleStoryPage(props) {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetchStory();
  }, [id]);

  const fetchStory = async () => {
    // Replace with your actual API endpoint    
    const response = await fetch(`/api/stories/${id}`);
    const data = await response.json();
    setStory(data);
  };

  if (!story) return <h1>Loading...</h1>;

  return (
    <div className="single-story-page">
      <h1>Story Detail Page</h1>
      <StoryCard story={story} />
      <NewComment user={props.user} />
    </div>
  );
}