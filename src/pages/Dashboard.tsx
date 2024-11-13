import React from 'react';
import '../styles/main.scss';
import ContentDisplay from '../components/ContentDisplay';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard content-display">
      <ContentDisplay/>
    </div>
  );
};

export default Dashboard;