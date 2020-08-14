import React, {useEffect, useState} from 'react';
import './Chat.css';
import ChatAddMessage from "../../components/ChatAddMessage/ChatAddMessage";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import {Sugar} from "react-preloaders";

const url = 'http://146.185.154.90:8000/messages';
const data = new URLSearchParams();
let dateTime = '';
let interval = null;

const Chat = () => {
    const [newMessage, setNewMessage] = useState({
        message: '',
        author: ''
    });
    const [messages, setMessages] = useState([]);
    const [preloader, setPreloader] = useState(true);

    const onSubmitNewMessageHandler = async e => {
        e.preventDefault();
        clearInterval(interval);
        data.set('author', newMessage.author);
        data.set('message', newMessage.message);

        const response = await fetch(url, {
            method: 'post',
            body: data
        }).then(response => response.json());

        dateTime = response.datetime;

        setNewMessage({
            message: '',
            author: ''
        });
        setInterval(getNewMessages, 3000);
    }

    const getNewMessages = async () => {
        const messages = [];
        const response = await fetch(dateTime !== '' ? `${url}?${dateTime}` : url)
            .then(response => response.ok && response.json())
            .catch(console.error);
        if(Array.isArray(response)) {
            response.map(item => messages.push(item));
            dateTime = response[response.length - 1].datetime;
        } else {
            messages.push(response);
            dateTime = response.datetime;
        }
        setMessages(messages);
        setPreloader(false);
    }

    useEffect(() => {
        interval = setInterval(getNewMessages, 3000);
        return () => clearInterval(interval);
    });

    return (
        <div className="Chat">
            <Sugar
                customLoading={preloader}
                background={'#00897b'}
                color={'#e0f2f1'}
            />
            <ChatAddMessage
                authorValue={newMessage.author}
                messageValue={newMessage.message}
                onChangeMessageHandler={(e) => setNewMessage({
                    ...newMessage,
                    [e.target.name]: e.target.value
                })}
                onSubmitNewMessageHandler={(e) => onSubmitNewMessageHandler(e)}
            />
            <ChatMessages
                messages={messages}
            />
        </div>
    );
};

export default Chat;