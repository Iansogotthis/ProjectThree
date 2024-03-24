import { useState } from "react";
import "./NewStoryForm.css";
import tokenService from "../../utils/tokenService";
import {useNavigate} from "react-router-dom"

export default function NewStoryForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: "",
    author: "",
    story: "",
    emotion: "",
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log("what were looking for")
    try{
    const response = await fetch(`/api/stories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        // convention for sending jwts, tokenService is imported above
        Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage 
        //and and it to our api request
        // so the server knows who the request is coming from when the client is trying to make a POST
      },
      body: JSON.stringify(state)
    })
    const data = await response.json()
    navigate('/nook-page')
  } catch(err){
    console.log(err)
  }
   

 }
  return (
    <>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          required
          value={state.title}
          onChange={handleChange}
        />

        <label>Author</label>
        <input
          name="author"
          required
          value={state.author}
          onChange={handleChange}
        />

        <label>Story</label>
        <textarea
          name="story"
          required
          value={state.story}
          onChange={handleChange}
        ></textarea>

        <label>Emotion</label>
        <select name="emotion" required onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>

        <input type="submit" value="Create Story" />
      </form>
    </>
  );
}
