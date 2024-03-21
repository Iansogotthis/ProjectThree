import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react'
import NookPage from "./pages/NookPage/NookPage";
import "./App.css";
import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";
import PageHeader from "./components/Header/Header";  
import NewStoryPage from "./pages/NewStoryPage/NewStoryPage";
import SingleStoryPage from "./pages/SingleStoryPage/SingleStoryPage";
function App() {
 
  
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
  }
  function logout() {
    console.log("happening");
    userService.logout();
    setUser(null);
  }

  if (!user) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  return (
    <>
    <PageHeader />
    <h1>Welcome to the App</h1>

    

    

    
      
 
    <Routes>
      <Route path="/" element={<h2 >Home Page</h2>} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path='/signup' element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path='/new-story' element={<NewStoryPage />} />
      <Route path="/nook-page" element={<NookPage />} />   
      <Route path="/story/:id" element={<SingleStoryPage user={user} />} />
       </Routes>
    </>
  );
}

export default App;
