
import React from 'react'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';



const Chat = ({name,message,profilePic,timestamp}) => {
  return (
    <Link to={`/chat/${name}`}>
    <div className="chat flex border-y items-center justify-between p-[20px] h-[70px]">
        <Avatar className="chat__image mr-[20px]"  src={profilePic}/>
      <div className='chat__details flex-1 '>
        <div className='text-lg font-medium'>{name}</div>
        <p className='text-xs font-medium text-gray-500'>{message}</p>
      </div>
      <p className='text-gray-400 text-xs font-medium'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat
