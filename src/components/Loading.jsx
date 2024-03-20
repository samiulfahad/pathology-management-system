import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = ({ title }) => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress((prevProgress) => prevProgress + diff);
        setBuffer((prevProgress) => prevProgress + diff + diff2);
      }
    };
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center content-center h-screen min-w-full">
      <div className="w-80 h-80">
        <h2 className="text-4xl pb-2 text-center">{title}</h2>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </Box>
      </div>
    </div>
  );
};

export default Loading;
