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

  console.log(user);



  async function handleSubmit(e){
    e.preventDefault()
    console.log("what were looking for")
    try{
    const response = await fetch(`/api/stories/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        
        Authorization: "Bearer " + tokenService.getToken() //
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