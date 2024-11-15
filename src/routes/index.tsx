import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Organization from '../pages/Organization';
import Notifications from '../pages/Notification';
import MainComponent from '../pages/InHouseBreadCrumb';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard/whatsapp" element={<Dashboard/>} />
        <Route path="organization" element={<Organization />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="inhousebc" element={<MainComponent/>} />
        <Route path="*" element={<Navigate to="/dashboard/whatsapp" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;