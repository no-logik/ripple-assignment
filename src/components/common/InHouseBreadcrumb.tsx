import React from 'react';
import '../../styles/main.scss';

interface BreadcrumbProps {
  path: string[];
  onNavigate: (index: number) => void;
}

const InHouseBreadcrumb: React.FC<BreadcrumbProps> = ({ path, onNavigate }) => {
  return (
    <div className="breadcrumb">
      {path.map((crumb, index) => (
        <span key={index} onClick={() => onNavigate(index)} className="breadcrumb-item">
          {crumb}
          {index < path.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
};

export default InHouseBreadcrumb;