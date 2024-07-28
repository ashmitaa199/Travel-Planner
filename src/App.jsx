import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Sidenav from './Sidenav'; // Your sidebar component
import Login from './Login'; // Your Login component
import Allmail from './Allmail'; // Your AllMail component
import Signup from './Signup'; // Your Trash component

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/chat/:person" element={
          <>
             <Header backButton="/chat"/>
             <ChatScreen/>
             
            
              {/* <Chats/> */}
          </>
        } />
        
     
        <Route path="/chat" element={
          <>
             <Header backButton="/"/>
             <div><Chats/></div>
              {/* <Chats/> */}
          </>
        } />
        
        <Route path="/" element={
          <>
            <Header/>
            <TinderCards />
            <SwipeButtons />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/allmail" element={<Allmail/>}/>
        <Route path="/signup" element={<Signup />} />
        
        
      
      </Routes>
    </Router>
  );
}

export default App;
