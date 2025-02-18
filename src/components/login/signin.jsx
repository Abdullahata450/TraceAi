import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email) {
      alert("Email is required!");
      return;
    }
    if (!data.email.includes("@")) {
      alert("Invalid email format!");
      return;
    }
    if (!data.password) {
      alert("Password is required!");
      return;
    }

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (data.email === "admin@memtrace.com" && data.password === "admin") {
      navigate('/home2'); // Navigate to home page after login
    } else if (storedAdmin && storedAdmin.email === data.email && storedAdmin.password === data.password) {
      alert("Sign In Successful!");
      navigate('/'); // Navigate to home page after login
    } else if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
      alert("Sign In Successful!");
      navigate('/'); // Navigate to home page after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='backdrop-blur bg-white/40 border w-[500px] h-[500px] shadow-xl rounded-lg flex flex-col justify-center items-center'>
        <div className='text-center font-bold text-4xl mb-3'>Welcome Back</div>
        <div className='font-light text-xl mb-5'>Sign in To Get Started</div>
        <div className='mb-2 w-1/2'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              placeholder="Enter your email"
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className='w-1/2 flex flex-col py-2'>
          <button
            type="submit"
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Sign In
          </button>
        </div>
        <div>
          Don't have an account?{" "}
          <span className='cursor-pointer text-blue-950 underline' onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

