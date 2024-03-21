import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StoryCard from '../../components/StoryCard/StoryCard';
import NewComment from '../../components/NewComment/NewComment';
import tokenService from '../../utils/tokenService';
import './SingleStoryPage.css';


export default function SingleStoryPage(props) {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchStory();
  }, [id]);

  const fetchStory = async () => {
    const response = await fetch(`/api/stories/${id}`);
    const data = await response.json();
    setStory(data);
  };

  async function onDelete(id) {
    try {
      const response = await fetch(`/api/stories/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
        },
      });
      if (response.ok) {
        // Redirect to the list of stories after deletion
        navigate('/nook-page')
      }
    } catch (err) {
      console.log(err.message);
      console.log("CHECK YOUR SERVER TERMINAL!!!!");
    }
  }

  if (!story) return <h1>Loading...</h1>;

  return (
    <div className="single-story-page">
      <h1>Story Detail Page</h1>
      <StoryCard story={story} onDelete={onDelete} />
      <NewComment user={props.user} />
    </div>
  );
}