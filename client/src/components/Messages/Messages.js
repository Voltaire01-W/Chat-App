import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom';

import SingleMessage from '../SingleMessage/SingleMessage';

import './Messages.css'

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map(
                (message, i) => 
                    <div key={i}>
                        <SingleMessage 
                            message={message} 
                            name={name}/>
                    </div>
                )}
        </ScrollToBottom>
    )
}

export default Messages
