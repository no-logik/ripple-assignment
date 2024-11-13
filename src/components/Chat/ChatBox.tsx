import React, { useState, useEffect } from 'react';
import '../../styles/main.scss';
import messagesData from '../../data/messages.json';

interface MessageProps {
  message: {
    message: string;
    sent: boolean;
    reacted: boolean;
    liked: boolean;
    online: boolean;
    generatedTime: string;
    sendericon: string;
  };
  onLike: () => void;
  onUnlike: () => void;
}

const Message: React.FC<MessageProps> = ({ message, onLike, onUnlike }) => {
  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className={`message-bubble ${message.sent ? 'sent' : 'received'}`}>
      <div className="message-content">
        {message.message}
      </div>
      <div className="sender-icon">
        <img src={message.sendericon} alt="sender" />
      </div>
      {!message.sent && (
        <div className="message-actions">
          <span
            className={`like-button ${message.liked ? 'active' : ''}`}
            onClick={onLike}
            style={message.reacted && message.liked ? { fontSize: '1.2em' } : {}}
          >
            {message.reacted && message.liked ? '😊' : '👍'}
          </span>
          <span
            className={`unlike-button ${!message.liked ? 'active' : ''}`}
            onClick={onUnlike}
            style={message.reacted && !message.liked ? { fontSize: '1.2em' } : {}}
          >
            {message.reacted && !message.liked ? '😠' : '👎'}
          </span>
        </div>
      )}
      <div className={`message-time ${message.sent ? 'sent-time' : 'received-time'}`}>
        {formatTime(message.generatedTime)}
      </div>
    </div>
  );
};

interface ChatboxProps {
  expand: boolean;
  newMessage?: string;
}

interface Message {
  message: string;
  sent: boolean;
  reacted: boolean;
  liked: boolean;
  online: boolean;
  generatedTime: string;
  sendericon: string;
}

const Chatbox: React.FC<ChatboxProps> = ({ expand, newMessage }) => {
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [maximizeChat, setMaximizeChat] = useState<boolean>(expand);

  useEffect(() => {
    setMaximizeChat(expand);
  }, [expand]);

  useEffect(() => {
    if (newMessage) {
      const newMsg: Message = {
        message: newMessage,
        sent: true,
        reacted: false,
        liked: false,
        online: false,
        generatedTime: new Date().toISOString(),
        sendericon: "/src/assets/avatar.png" // Add default icon path
      };
      setMessages(prev => [...prev, newMsg]);
    }
  }, [newMessage]);

  const handleLike = (index: number) => {
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index].liked = true;
      updatedMessages[index].reacted = true;
      return updatedMessages;
    });
  };

  const handleUnlike = (index: number) => {
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index].liked = false;
      updatedMessages[index].reacted = true;
      return updatedMessages;
    });
  };

  return (
    <div className={`chatbox ${!maximizeChat ? 'chatbox-collapsed' : ''}`}>
      <div className="messages">
        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg}
            onLike={() => handleLike(index)}
            onUnlike={() => handleUnlike(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Chatbox;