import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';

import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Sidenav from './Sidenav'; // Your sidebar component
import Login from './Login'; // Your Login component
import Logout from './Logout'; // Your AllMail component
import Signup from './Signup'; // Your Trash component
import Home from './Home';

import { auth } from "../firebase";
import OnBoarding from './pages/OnBoarding';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={
          
          <Home/>
          
        } />

<Route path="/dashboard" element={
          
          <Dashboard/>
          
        } />

      <Route path="/chat/:person" element={
          <>
             <Header backButton="/chat"/>
             <ChatScreen/>
             {/* chat diplay */}
             
            
              {/* <Chats/> */}
          </>
        } />
        
     
        <Route path="/chat" element={
          <>
             <Header backButton="/dashboard"/>
             <div><Chats/></div>
             
          </>
        } />
        
        
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnBoarding/>}/>
        
        
      
      </Routes>
    </Router>
  );
}

export default App;
