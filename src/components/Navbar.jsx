import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const navigate = useNavigate();

  // Function to update user state from localStorage
  const updateUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  };

  useEffect(() => {
    // Update user state when localStorage changes
    window.addEventListener("storage", updateUser);
    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate('/login'); // Redirect to login page
  };

  return (

    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Mem-Trace</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-blue-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">Features</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">About</a></li>
          <li><a href="/ContactUs" className="text-white hover:text-blue-300">Contact</a></li>
        </ul>

        {/* Show User Profile if Logged In */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-white ">{user.fullname}  </span>

              <img width="28" height="28" src="https://img.icons8.com/color/48/user.png" alt="user"/>
              <span className='text-white text-2xl font-bold  rounded'> | </span>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">Logout</button>
            </div>
          ) : (
            <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
