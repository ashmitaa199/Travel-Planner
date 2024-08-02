import React from 'react';
import { useState } from 'react';

const ChatInput = () => {
    const [textArea,setTextArea]=useState(null);
  return (
    <div className='chat-input'>
        <textarea className=" border" value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
        <button className='secondary-button'>SUBMIT</button>
      
    </div>
  )
}

export default ChatInput
