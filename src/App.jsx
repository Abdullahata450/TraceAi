// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import  Form from './components/login/singup';
import SignInForm from './components/login/signin';
import FuturisticUploadPage from './Upload Memory Dump';
import ProcessingPage from './Upload Memory Dump/ProcessingPage';
import ResultsPage from './Upload Memory Dump/Result';
import ChatSystem from './ChatSystem';
import Home2 from './Home/Home2';
import ContactUs from './Home/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Form />} />
        <Route path="/Login" element={<SignInForm />} />
        <Route path="/Upload" element={<FuturisticUploadPage />} />
        <Route path="/Processing" element={<ProcessingPage />} />
        <Route path="/Results" element={<ResultsPage />} />
        <Route path='/ChatSystem' element={<ChatSystem />} />
        <Route path='/Home2' element={<Home2 />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
