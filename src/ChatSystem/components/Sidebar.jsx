import React from 'react';
import avatar from '../../assets/users.jpg';

const Sidebar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("user")) || { fullname: "Guest", email: "guest@example.com", image: "https://via.placeholder.com/40" };
  const otherUsers = [
    { name: 'Alice Johnson', email: 'alice@example.com', image: 'avatar' },
    { name: 'Bob Smith', email: 'bob@example.com', image: 'https://via.placeholder.com/40' },
    { name: 'Charlie Brown', email: 'charlie@example.com', image: 'https://via.placeholder.com/40' }
  ];

  return (
    <div className="sidebar-container bg-white h-screen p-6">
      <div className="user-info flex items-center">
        <img className="avatar-image rounded-full w-12 h-12 mr-4" src={avatar} alt="User Avatar" />
        <div>
          <h2 className="user-name font-bold">{loggedInUser.fullname}</h2>
          <p className="user-account text-gray-600">{loggedInUser.email}</p>
        </div>
      </div>
      <hr className="border-b border-gray-400 my-6" />
      <div className="message-section">
        <div className="message-title font-bold text-lg">Messages</div>
        <div className="message-list mt-4">
          {otherUsers.length > 0 ? (
            otherUsers.map((conversation) => (
              <div key={conversation.email} className="message-item flex items-center cursor-pointer hover:bg-gray-100 p-2">
                <img className="message-avatar rounded-full w-12 h-12 mr-4" src={avatar} alt={conversation.name} />
                <div>
                  <h2 className="message-name font-bold">{conversation.name}</h2>
                  <p className="message-status text-gray-600">{conversation.email}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg font-bold italic mt-14">No conversations found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

