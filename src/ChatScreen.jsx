import { Avatar } from '@mui/material';
import React, {useState} from 'react'


const ChatScreen = () => {
    const [input, setInput] =useState('');
    const [messages, setMessages] =useState ([
        {
            name:'Ellen',
            image:'...',
            message:'whats up',
        },

        {
            name:'Ellen',
            image:'...',
            message:'how its going',
        },

        {
            
            message:'whats up',
        },

    ]);

    const handleSend= (e) =>{
        e.preventDefault();
        setMessages([...messages, {message:input}]);
        
        setInput("");
    };

  return (
    <div className='chatScreen'>
     
      <p className=' text-center p-[20px] text-slate-400'>you matched with.. on.</p>
      
      {messages.map((message) => (
        message.name ? (
            <div className='chatScreen__messages flex items-center p-[20px]'>
            <Avatar className='chatScreen__img'
            alt={message.name}
            src={message.image}
            />
            <p className='ml-[10px] bg-slate-300 p-[10px] rounded-2xl'>
                {message.message}</p>
         </div>

        ):
        (
            <div className='chatScreen__messages flex items-center p-[20px]'>
            <p className='text_user ml-auto text-white bg-cyan-600 p-[10px] rounded-2xl'>
                {message.message}</p>
         </div>

        )
        
      ))}
      <div className='chatScreen__input flex fixed bottom-0 w-full'>
  <form 
  value={input}
  onChange={e=>setInput(e.target.value)}

  className='w-full  mx-auto flex items-center'>
    <input type='text' className='border-y-2 flex-1 p-2 ' placeholder='Type your message...'></input>
    <button onClick={handleSend} type='submit' className='border px-4 py-2 text-red-500 font-bold'>SEND</button>
  </form>
</div>

    </div>
    
  )
}

export default ChatScreen;
