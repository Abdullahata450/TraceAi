import React, { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })));

function FuturisticUploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      navigate("/processing"); // Navigate to processing page
    } else {
      alert("Please select a file to upload!");
    }
  };

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 h-screen flex items-center justify-center"
        >
          <div className="bg-white/40 w-[600px] h-[400px] shadow-xl rounded-lg flex-col items-center justify-center p-8 relative">
            <h1 className="text-center font-bold text-3xl mb-4">Upload Your Memory Dump</h1>
            <p className="text-gray-700 mb-6">Please select a memory dump file to upload.</p>
            <div className="flex flex-col space-y-4">
              <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 cursor-pointer"
              >
                Choose File
              </label>
              {selectedFile && (
                <span className="block text-sm font-medium text-gray-700 mt-2">
                  Selected File: {selectedFile.name}
                </span>
              )}
              <MotionDiv
                whileTap={{ scale: 0.95 }}
                className="w-full flex mt-3 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-green-500 cursor-pointer"
                onClick={handleUpload}
              >
                Upload
              </MotionDiv>
            </div>
          </div>
        </MotionDiv>
      </Suspense>
    </>
  );
}

export default FuturisticUploadPage;
