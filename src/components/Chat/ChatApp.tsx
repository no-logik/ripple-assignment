import React, { useEffect } from 'react'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
import ChatBox from './ChatBox'
import { useState } from 'react'
import '../../styles/main.scss'

const ChatApp:React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [message, setMessage] = useState<string>('');

  const handleMessageUpdate = (newMessage: string) => {
    setMessage(newMessage);
  };

  useEffect(() => {
    console.log("message is in the app: ", message);
  }, [message]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log('isOpen', isOpen)

  return (
    <div className='chatapp'>
      <ChatHeader 
        isOpen={isOpen} 
        onToggle={handleToggle} 
        isOnline={true} 
      />
      <ChatBox expand={isOpen} newMessage={message} />
      <ChatFooter onMessageUpdate={handleMessageUpdate}/>
    </div>
  )
}

export default ChatApp