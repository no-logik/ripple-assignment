import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import './styles/main.scss';
import HelpDesk from './components/HelpDesk';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-container">
        <Outlet />
        <HelpDesk />
      </main>
    </div>
  );
};

export default App;