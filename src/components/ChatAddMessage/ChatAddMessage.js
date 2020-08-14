import React from 'react';
import './ChatAddMessage.css';

const ChatAddMessage = props => {
    return (
        <form className="Chat-form" onSubmit={props.onSubmitNewMessageHandler}>
            <input
                type="text"
                name="author"
                className="ChatAddMessage-inputs ChatAddMessage-author"
                value={props.authorValue}
                placeholder="Enter your name"
                onChange={props.onChangeMessageHandler}
                required
            />
            <input
                type="text"
                name="message"
                className="ChatAddMessage-inputs ChatAddMessage-message"
                value={props.messageValue}
                placeholder="Enter your message"
                onChange={props.onChangeMessageHandler}
                required
            />
            <button type="submit" className="ChatAddMessage-send" disabled={props.disabled}>Send</button>
        </form>
    );
};

export default ChatAddMessage;