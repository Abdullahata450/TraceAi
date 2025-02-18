import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'

function ChatSystem() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
         <Sidebar />
        <ChatWindow />
      </div>
    </div>
  )
}

export default ChatSystem
