import React from 'react';
import { useState } from 'react';

const ChatInput = () => {
    const [textArea,setTextArea]=useState('');
  return (
    <div className='chat-input'>
        <textarea className=" border" value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
        <button className='secondary-button'>SUBMIT</button>
      
    </div>
  )
}

export default ChatInput

// import React, { useState } from 'react';

// const ChatInput = () => {
//   // Initialize state with an empty string
//   const [textArea, setTextArea] = useState('');

//   const handleChange = (e) => {
//     setTextArea(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the submit action here, e.g., sending the message
//     console.log('Message submitted:', textArea);
//     setTextArea(''); // Clear the textarea after submission
//   };

//   return (
//     <div className='chat-input'>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           className="border"
//           value={textArea} // Ensure value is always a string
//           onChange={handleChange}
//           placeholder="Type your message here..."
//         />
//         <button
//           type="submit"
//           className='secondary-button'
//         >
//           SUBMIT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatInput;

