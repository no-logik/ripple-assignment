import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/main.scss';
import SearchIcon from '../../assets/search.svg';
import Profile from './Profile';
import Avatar from '../../assets/avatar.png';
import { useSearch } from '../../context/SearchContext';

const Navbar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/dashboard/whatsapp" className="nav-link">Dashboard</NavLink>
        <NavLink to="/organization" className="nav-link">Organization</NavLink>
        <NavLink to="/notifications" className="nav-link">Notifications</NavLink>
        <div className="separator"></div>
        <div className="search-container">
          <img 
            className='search-icon' 
            src={SearchIcon} 
            alt="Search" 
            width="24" 
            height="24"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowSearch(false);
                }
              }}
              placeholder="Search..."
              className="search-input"
              autoFocus
            />
          )}
        </div>
      </div>
      <div className='position-holder'>
        <Profile 
          name="Bhushan Kapoor" 
          title="Admin" 
          imageUrl={Avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;