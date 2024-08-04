import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ChatHeader from './components/ChatHeader';
import MatchesDisplay from './components/MatchesDisplay';
import ChatDisplay from './components/ChatDisplay';

const Chat = ({ user }) => {
  // Check if user is null or undefined and provide default handling
  if (!user) {
    return <div>Loading...</div>; // Or a more sophisticated loading state
  }

  return (
    <div className='chat-container'>
      <ChatHeader user={user} />
      <div>
        <button className='option'>Matches</button>
        <button className='option'>Chat</button>
      </div>
      <section>
        <MatchesDisplay />
        <ChatDisplay />
      </section>
    </div>
  );
};

export default Chat;
