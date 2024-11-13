import { useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/main.scss';

const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<{ text: string; path: string }[]>([]);

  useEffect(() => {
    // Convert URL path to breadcrumbs
    const newBreadcrumbs = location.pathname
      .split('/')
      .filter(segment => segment !== '')
      .map((segment, index, array) => {
        const path = '/' + array.slice(0, index + 1).join('/');
        return {
          text: segment.charAt(0).toUpperCase() + segment.slice(1),
          path
        };
      });

    setBreadcrumbs(newBreadcrumbs);
  }, [location]);

  return (
    <div className="breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path} className="breadcrumb-item">
            {index > 0 && <span className="separator">&gt;</span>}
            <NavLink 
              to={crumb.path} 
              className={location.pathname === crumb.path ? 'active' : ''}
              style={index === breadcrumbs.length - 1 ? { color: '#D0D1D2' } : undefined}
            >
              {crumb.text.toUpperCase()}
            </NavLink>
          </span>
        ))}
      </div>
    
  );
};

export default BreadCrumb;
