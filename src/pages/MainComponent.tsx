import React, { useState } from 'react';
import InHouseBreadcrumb from '../components/common/InHouseBreadcrumb';
import Country from '../components/common/Country';
import State from '../components/common/State';
import City from '../components/common/City';
import '../styles/main.scss';

const MainComponent: React.FC = () => {
  const [path, setPath] = useState<string[]>(['Country']);

  const handleNavigate = (index: number) => {
    setPath(path.slice(0, index + 1));
  };

  const handleNext = (next: string) => {
    setPath([...path, next]);
  };

  const renderComponent = () => {
    switch (path[path.length - 1]) {
      case 'Country':
        return <Country onNext={handleNext} />;
      case 'State':
        return <State onNext={handleNext} />;
      case 'City':
        return <City />;
      default:
        return null;
    }
  };

  return (
    <div className="main-component">
      <InHouseBreadcrumb path={path} onNavigate={handleNavigate} />
      {renderComponent()}
    </div>
  );
};

export default MainComponent;