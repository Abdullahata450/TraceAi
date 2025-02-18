import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })));

function ProcessingPage() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            alert("File processed successfully!");
            navigate("/Results");
          }, 2000);
          return 100;
        }
        return oldProgress + 5;
      });
    }, 200);
    
    return () => clearInterval(progressInterval);
  }, [navigate]);

  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen flex flex-col items-center justify-center bg-white"
      >
        <h1 className="text-4xl font-bold mb-4">Processing</h1>
        <p className="text-lg text-gray-600 mb-4">Please wait...</p>
        <div className="w-24 h-24">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              textSize: "12px",
              pathColor: "#4CAF50",
              textColor: "#000",
              trailColor: "#ddd",
            })}
          />
        </div>
      </MotionDiv>
    </Suspense>
  );
}

export default ProcessingPage;
