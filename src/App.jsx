import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Chat from './Chat';

import Sidenav from './Sidenav'; // Your sidebar component
import Home from './Home';
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
            
            
             {/* chat diplay */}
             
            
              {/* <Chats/> */}
          </>
        } />
        
     
        <Route path="/chat" element={
          <>
             <Header backButton="/dashboard"/>
             <Chat/>

            
            
             
          </>
        } />
        
        <Route path="/" element={
          <>
          <Home/>
            {/* <Header/>
            <TinderCards />
            <SwipeButtons /> */}
          </>
        } />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/onboarding" element={<OnBoarding/>}/>
        
        
      
      </Routes>
    </Router>
  );
}

export default App;
