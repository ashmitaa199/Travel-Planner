
import React from 'react'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import ChatHeader from './components/ChatHeader';
import MatchesDisplay from './components/MatchesDisplay';
import ChatDisplay from './components/ChatDisplay';

//chatcontainer



const Chat = () => {
  return (

    <div className='chat-container'>
      <ChatHeader/> 
      <div>
        <button className='option '>Matches</button>
        <button className=' option '>Chat</button>
      </div>
      <MatchesDisplay/> 
     <ChatDisplay/>
    </div>
    
  )
}

export default Chat
