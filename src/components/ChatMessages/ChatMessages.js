import React from 'react';
import './ChatMessages.css';
import ChatMessage from "./ChatMessage/ChatMessage";

const ChatMessages = props => {
    return (
        <div className="ChatMessages">
            {props.messages.map(item => <ChatMessage
                key={item._id}
                author={item.author}
                message={item.message}
                datetime={item.datetime}
            />).reverse()}
        </div>
    );
};

export default ChatMessages;