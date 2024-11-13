import { useState } from 'react';
import '../../styles/main.scss';
import DeleteIcon from '../../assets/delete.png';
import { useEffect } from 'react';

interface LeadCardProps {
  name: string;
  platform: string;
  group: string;
  time: string;
  source: string;
  phone: string;
  message: string;
  imageUrl: string;
  liked?: boolean;
  contacted?: boolean;
  hidden?: boolean;
  onDelete: () => void;
}

const LeadCard: React.FC<LeadCardProps> = ({ 
  name, 
  platform,
  group,
  time, 
  source, 
  phone, 
  message, 
  imageUrl, 
  liked = false,
  contacted,
  hidden,
  onDelete 
}) => {
  // Use liked prop directly and notify parent component of changes
  const [isLiked, setIsLiked] = useState(liked ?? false);

  
  useEffect(() => {
    setIsLiked(liked ?? false);
  }, [liked]);


  return (
    <div className="lead-card">
      <div className={`lead-card__image ${hidden ? 'hidden' : ''}`}>
        <img src={imageUrl} alt={`${name}'s pfp`} />
      </div>

      <div className="lead-card__content">
        <div className="lead-card__header">
          <span className={`lead-card__name ${hidden ? 'hidden' : ''}`}>{name}</span>
          <div className="separator"></div>
          <span className="lead-card__time">
            {(() => {
              const now = new Date();
              const date = new Date(time);
              const diff = now.getTime() - date.getTime();
              const minutes = Math.floor(diff / 60000);
              const hours = Math.floor(minutes / 60);
              const days = Math.floor(hours / 24);

              if (days > 0) return `${days}d ago`;
              if (hours > 0) return `${hours}h ago`;
              if (minutes > 0) return `${minutes}m ago`;
              return 'just now';
            })()}
          </span>
          {group && (
            <>
              <div className="separator"></div>
              <span className="lead-card__group">{group}</span>
            </>
            )}
          <div className="separator"></div>
          <span className="lead-card__source"><span className='lead-card__source--text  '>via:</span> {source}</span>
          <div className="separator"></div>
            <div className="lead-card__phone-wrapper">
              <span 
              className="lead-card__phone-cover" 
              onClick={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              style={{ 
                whiteSpace: 'nowrap',
                display: contacted ? 'none' : 'inline' 
              }}
              >
              Contact Details
              </span>
              <span className="lead-card__phone">{phone}</span>
            </div>
            <div className="separator"></div>
          <button 
            className={`lead-card__like ${isLiked ? 'active' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            &#10084;
          </button>
        </div>
        <div className="lead-card__message">
          {message}
        </div>
      </div>

      <div 
        className="lead-card__delete" 
        onClick={onDelete} 
        onMouseEnter={(e) => e.currentTarget.classList.add('lead-card__delete__hover')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('lead-card__delete__hover')}
      >
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
};

export default LeadCard;