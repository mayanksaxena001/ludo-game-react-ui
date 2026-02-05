import { Avatar, Button, withStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatboxExpanded } from '../../reducers/socketReducer';
import './sidebar.css';

const ChatSidebar = (props) => {
    const dispatch = useDispatch();
    const { gameData,room, handleSendMessage } = props;
    const [newMessage, setNewMessage] = useState('');
    const { messages, chatboxexpanded } = useSelector(state => state.socket);
    const [expanded, setExpanded] = useState(chatboxexpanded);

    const toggleChatbox = () => {
        setExpanded(!expanded);
        dispatch(setChatboxExpanded(!chatboxexpanded));
    };

    const handleSendButton = () => {
        if (newMessage.trim() !== '') {
            //   setMessages([...messages, { text: newMessage, sender: 'You' }]);
            handleSendMessage(newMessage);
            setNewMessage('');
        }
    };
    useEffect(() => {
        console.log("inside sidebar use effect..");
        let result = [];
        for (var key in messages) {
            const message = messages[key];
            if (message) result.push(message);
        }
    }, [])

    const getFormattedMessagePanel=()=>{
        return messages.map((message, index) => (
            getMessageBox(message,index)
        ))
    }
    const getMessageBox=(message,index)=>{
        const player=gameData.players[message.userId];
        return <div key={index} className="message">
        <strong>{player.username}:</strong> {message.content}
    </div>
    }
    const ChatWindow = () => <div className="chat-sidebar">
        {/* <div className="chat-header">Chat Messages</div> */}
        <div className="chat-messages">
            {getFormattedMessagePanel()}
        </div>
        <div className="chat-input">
            <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                autoFocus="autoFocus"
                onChange={(e) => setNewMessage(e.target.value)} />
            <StyledButton disabled={newMessage == ''} size="large" onClick={() => handleSendButton()}>{<Avatar src={'/img/next.svg'} />}</StyledButton>
        </div>
    </div>

    const content = expanded ? <ChatWindow /> : '';

    const StyledButton = withStyles({
        root: {
            backgroundColor: 'transparent',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#fff',
                color: '#3c52b2',
            },
        }
    })(Button);


    const sidebarclass = "expandable-chatbox ";
    return (
        <div className={sidebarclass} >
            {content}
            <StyledButton onClick={toggleChatbox} className="chatbox-button">
                {<Avatar src={'/img/twitter.svg'} />}
                {/* {expanded ? 'Open Chat' : 'Close Chat'} */}
            </StyledButton>
        </div>
    );
};

export default ChatSidebar;
