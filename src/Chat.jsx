import React, { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import MatchesDisplay from './components/MatchesDisplay';
import ChatDisplay from './components/ChatDisplay';
import Chatt from './components/Chatt';

const Chat = ({ user }) => {

const [clickedUser, setClickedUser] =useState(null)
// console.log('clickedUser', clickedUser)

  if (!user) {
    return <div>Loading...</div>; // loading state
  }

  return (
    <div className='chat-container'>
      <ChatHeader user={user} />
      <div>
        <button className='option' onClick={() => setClickedUser(null)}>Matches</button>
        <button className='option' disabled={!clickedUser}>Chat</button>
      </div>
      <section>
       {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
       {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
      </section>
    </div>
  );
};

export default Chat;
