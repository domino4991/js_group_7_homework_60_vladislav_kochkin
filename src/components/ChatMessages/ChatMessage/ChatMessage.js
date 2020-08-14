import React from 'react';
import './ChatMessage.css';
import Moment from "react-moment";
import {FaUserCircle} from "react-icons/fa";
import {MdAccessTime} from "react-icons/md";

const ChatMessage = React.memo(props => {
    return (
        <div className="Chat-message">
            <div className="Chat-message__header">
                <p className="Chat-message__author"><span><FaUserCircle /></span>{props.author}</p>
                <p className="Chat-message__date"><span><MdAccessTime /></span><Moment format="DD.MM.YYYY HH:mm">{props.datetime}</Moment></p>
            </div>
            <p className="Chat-message__message">{props.message}</p>
        </div>
    );
});

export default ChatMessage;