import React, { useState, useEffect } from "react";
import StoryCard from "../../components/StoryCard/StoryCard";
import tokenService from "../../utils/tokenService";
export default function NookPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories from the server when the component mounts
    fetchStories();
  }, []);

  async function fetchStories() {
    try {
      const response = await fetch("/api/stories", {
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
        },
      });
      const data = await response.json();
      setStories(data.stories);
    } catch (err) {
      console.log(err.message);
      console.log("CHECK YOUR SERVER TERMINAL!!!!");
    }
  }

  return (
    <div>
      <h1>Reading Nook</h1>
      {stories.map((story, index) => (
        <StoryCard key={index} story={story} />
      ))}
    </div>
  );
}
