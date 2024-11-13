import React from 'react';
import '../../styles/main.scss';
import ChatLogo from '../../assets/chat-logo.png';

interface ChatHeaderProps {
  isOnline: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({isOnline, isOpen, onToggle }) => {
  return (
    <div className="chat-header">
      <div className="chat-header__head">
      <div className="chat-header__logo">
        <img src={ChatLogo} alt="Ripple Labs Logo" />
      </div>
      
      <div className="chat-header__info">
        <div className="chat-header__title">Ripple Helpdesk</div>
        <div className={isOnline?'chat-header__status_online':'chat-header__status_offline'}>
          <span className="status-dot"></span>
          <span>{isOnline?'Online':'Offline'}</span>
        </div>
      </div>
      </div>
      
      <div className="chat-header__toggle">
        <button 
          className={`toggle-button ${isOpen ? 'active' : ''}`}
          onClick={onToggle}
        >
          {!isOpen ? '+' : '-'}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;