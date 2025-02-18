// src/components/Navbar.js
import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">TraceAI</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-blue-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">Features</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">About</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">Contact</a></li>
        </ul>
        <div className="flex justify-end">
          <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
