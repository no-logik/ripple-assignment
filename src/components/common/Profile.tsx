import React, { useState } from 'react';
import '../../styles/main.scss';

import DropDown from '../../assets/arrow.png';
interface ProfileProps {
  name: string;
  title: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`profile ${isHovered ? 'profile--hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="profile__info">
        <img src={imageUrl} alt={`${name}'s pfp`} className="profile__image" />
        <div className="profile__details">
          <span className="profile__name">{name}</span>
          <span className="profile__title">{title}</span>
        </div>
        <span></span>
      <span 
        className={`profile__arrow ${isHovered ? 'profile__arrow--hovered' : ''}`}
      >
        <img src={DropDown} />
      </span>
      </div>
      {isHovered && (
        <div className={`profile__options ${isHovered ? 'profile__options--hovered' : ''}`}>
          <div className="profile__separator"></div>
          <div className="profile__option">Manage Your Team</div>
          <div className="profile__separator"></div>
          <div className="profile__option">Configure Signals</div>
          <div className="profile__separator"></div>
          <div className="profile__option">Support</div>
        </div>
      )}
    </div>
  );
};

export default Profile;
