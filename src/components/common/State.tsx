import React from 'react';
import '../../styles/main.scss';

interface StateProps {
  onNext: (next: string) => void;
}

const State: React.FC<StateProps> = ({ onNext }) => {
  return (
    <div>
      <h2>State Component</h2>
      <button onClick={() => onNext('City')}>Go to City</button>
    </div>
  );
};

export default State;