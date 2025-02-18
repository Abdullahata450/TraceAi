import React from 'react';
import Background from '../assets/background.webp';
import '../index.css';

const Home2 = () => {
  return (
    <>
      <nav className="bg-blue-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Mem-Trace</div>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-blue-300">Home</a></li>
            <li><a href="#" className="text-white hover:text-blue-300">Features</a></li>
            <li><a href="#" className="text-white hover:text-blue-300">About</a></li>
            <li><a href="#" className="text-white hover:text-blue-300">Contact</a></li>
          </ul>

          {/* Show User Profile if Logged In */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-white">Admin</span>
              <img width="28" height="28" src="https://img.icons8.com/color/48/user.png" alt="user"/>
              <span className="text-white text-2xl font-bold rounded"> | </span>
              <button onClick={() => { window.location.href = "/Login" }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex flex-col justify-center items-center text-black">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="text-6xl lg:text-7xl font-bold mb-4 z-10">Mem-Trace</h1>

        <h2 className="text-3xl mb-6 z-10">Discover the Future of Memory Forensics</h2>
        <p className="text-xl max-w-2xl text-center z-10">
          Transform memory analysis into actionable insights and secure your environment with TraceAI.
        </p>
        <div className="flex space-x-4 mt-6 z-10">
          <a
            href="/upload"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Upload Memory Dump
          </a>
          <a
            href="/ChatSystem"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Chat
          </a>
        </div>
      </div>
    </>
  );
};

export default Home2;

