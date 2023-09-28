import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from '../../reducers/connectSocket';
import { connectSocketToServer, sendMessage } from '../../reducers/socketReducer';

const ChatRoom = () => {
    const dispatch = useDispatch();
    const connected = useSelector((state) => state.socket.connected);
    const messages = useSelector((state) => state.socket.messages);
    Socket(dispatch);

    useEffect(() => {
        // dispatch(connectSocket(socket));
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        dispatch(sendMessage(message));
        e.target.reset();
    };

    return (
        <div>
            {connected ? <p>Connected to Socket.IO server!</p> : <p>Connecting...</p>}
            <ul>
                {messages.map((message, i) => (
                    <li key={i}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" placeholder="Enter a message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatRoom;
