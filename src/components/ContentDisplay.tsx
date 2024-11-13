import React from 'react'
import Workspace from './Workspace';
import BreadCrumb from './common/BreadCrumb';

const ContentDisplay: React.FC = () => {
  return (
    <div className="contentdisplay">
      <BreadCrumb/>
      <div className="content-display__workspace">
        <Workspace/>
      </div>
    </div>
  )
}

export default ContentDisplay;