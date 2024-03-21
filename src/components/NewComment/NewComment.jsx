import React, { useState } from 'react';
import tokenService from '../../utils/tokenService';

export default function NewComment({user}) {
  const [state, setState] = useState({
  
    user: '',
    comment: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
   // username comes from the params, defined
  // in the app.js routes  <Route path="/:username" ele
  
  // username should be whatever is in the url
  // localhost:8000/jim => username should be jim
  console.log(user);



  async function handleSubmit(e){
    e.preventDefault()
    console.log("what were looking for")
    try{
    const response = await fetch(`/api/story/_id`, {
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
  } catch(err){
    console.log(err)
  } 
}
  return (
    <form onSubmit={handleSubmit}>
      
      <label>
        Comment:
        <textarea
          name="comment"
          value={state.comment}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}