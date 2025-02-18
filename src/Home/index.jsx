// src/components/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">TraceAI</h1>
      <h2 className="text-3xl mb-6">Discover the Future of Memory Forensics</h2>
      <p className="text-xl max-w-2xl text-center">
        Transform memory analysis into actionable insights and secure your environment with TraceAI.
      </p>
      <a
        href="/upload"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Get Started
      </a>
    </div>
    </>

  );
};

export default Home;
