import React from 'react'

const Chatt = ({descendingOrderMessages}) => {
  return (
    <>
    <div className="chat-display">
        {descendingOrderMessages.map((message, _index) => (
            <div key={_index} className='bg-slate-600'>
                <div className="chat-message-header bg-slate-100">
                    <div className="img-container">
                        <img src={message.img} alt={message.name + ' profile'}/>
                    </div>
                    <p>{message.name}</p>
                </div>
                <p>{message.message}</p>
            </div>
        ))}
    </div>
</>
  )
}

export default Chatt
