import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

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
      </Routes>
    </Router>
  );
}

export default App;
