import { FC, useState } from 'react'
import SendIcon from '../../assets/send.png';
import '../../styles/main.scss';

interface PromptTextProps {
  text: string;
  onClick: () => void;
}

const PromptText: FC<PromptTextProps> = ({ text, onClick }) => (
  <button 
    className="prompt-text" 
    onClick={onClick}
    type="button"
  >
    {text}
  </button>
);

interface ChatFooterProps { 
  onMessageUpdate: (message: string) => void;
}

const ChatFooter: FC<ChatFooterProps> = ({onMessageUpdate}) => {

  
  const prompts = [
    "🤔 What is a Detective Agent?",
    "💰Pricing",
    "🙋‍♂️ FAQs"
  ] as const;

  const [inputValue, setInputValue] = useState('');
  
  const handlePromptClick = (prompt: string): void => {
    setInputValue(prompt);
    // sendChatMessage();
  };

  const sendChatMessage = () => {
    onMessageUpdate(inputValue);
    setInputValue(''); // Clear input after submit
  };

  return (
    <footer className="chat-footer">
      <div className="chat-footer__prompts">
        {prompts.map((prompt) => (
          <PromptText 
            key={prompt}
            text={prompt}
            onClick={() => handlePromptClick(prompt)}
          />
        ))}
      </div>
      <div className="chat-footer__messenger">
      <input
        type="text"
        placeholder="Type your message..."
        className="messenger__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span
        className="messenger__send"
        onClick={sendChatMessage}
      >
        <img src={SendIcon} alt="send" />
      </span>
    </div>
    </footer>
  );
};

export default ChatFooter;