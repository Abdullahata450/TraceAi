// src/components/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Background from '../assets/background.webp';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    if (!storedUser) {
      alert("Please login first!");
      navigate('/Login');
    } else {
      navigate('/ChatSystem');
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-black"
      >
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
        <a
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 z-10"
        >
          {storedUser ? "Get Started" : "Please login first!"}
        </a>
      </div>
    </>
  );
};

export default Home;

