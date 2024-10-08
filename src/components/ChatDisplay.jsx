import React, { useEffect, useState } from 'react';
import Chatt from './Chatt';
import ChatInput from './ChatInput';
import axios from 'axios';

const ChatDisplay = ({ user, clickedUser }) => {
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;
  const [usersMessages, setUsersMessages] = useState([]);
  const [clickedUsersMessages, setClickedUsersMessages] = useState([]);

  const getUsersMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8000/messages', {
        params: { userId: userId, correspondingUserId: clickedUserId }
      });
      setUsersMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClickedUsersMessages = async () => {
    try {
        const response = await axios.get('http://localhost:8000/messages', {
            params: { userId: clickedUserId , correspondingUserId: userId}
        })
        setClickedUsersMessages(response.data)
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
    getUsersMessages()
    getClickedUsersMessages()
    
  }, []);

  const messages = [];

  usersMessages?.forEach(message => {
    const formattedMessage = {
      name: user?.first_name,
      img: user?.url,
      message: message.message,
      timestamp: message.timestamp
    };
    messages.push(formattedMessage);
});

  clickedUsersMessages.forEach(message => {
    const formattedMessage = {
      name: clickedUser?.first_name,
      img: clickedUser?.url,
      message: message.message,
      timestamp: message.timestamp
    };
    messages.push(formattedMessage);
  });

  const descendingOrderMessages = messages?.sort((a,b) => a.timestamp.localeCompare(b.timestamp))

  return (
    <div className='w-full h-screen '>
      <Chatt descendingOrderMessages={descendingOrderMessages} />
     <div className='flex justify-center'>
     <ChatInput 
      user={user} 
      clickedUser={clickedUser}
       getUserMessages={getUsersMessages}
      getClickedUsersMessages={getClickedUsersMessages}
      />

     </div>
     
   
      
    </div>
  );
};

export default ChatDisplay;
