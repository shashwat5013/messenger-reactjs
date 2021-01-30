import React, { forwardRef } from 'react'
import './Message.css'


const Message = forwardRef(({ message, username }, ref) => {
    let classfound = message.username === username ? 'message_owner' : 'message_guest';
    let name = message.username === username ? 'YOU' : message.username || "UnKnown";

    return (
        <div ref={ref} className={classfound}>
            <div className="username_card">{name}:</div>{message.message}
        </div>
    )
})

export default Message
