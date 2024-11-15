import React from 'react';
import '../../styles/main.scss';

interface CountryProps {
  onNext: (next: string) => void;
}

const Country: React.FC<CountryProps> = ({ onNext }) => {
  return (
    <div>
      <h2>Country Component</h2>
      <button onClick={() => onNext('State')}>Go to State</button>
    </div>
  );
};

export default Country;