import React, { useState } from 'react';
import tokenService from '../../utils/tokenService';

export default function NewComment({user, addComment}) {
  const [state, setState] = useState({
  
    
    comment: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);
 
  function handleSubmit(e){
    e.preventDefault()
    addComment(state)
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