import React from 'react'

import '../styles/main.scss'
import ChatApp from './Chat/ChatApp'

const HelpDesk:React.FC = () => {
  return (
    <div className='helpdesk'>
      <ChatApp />
    </div>
  )
}

export default HelpDesk