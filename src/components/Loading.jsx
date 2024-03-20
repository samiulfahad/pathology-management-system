import React, { useState, useEffect, useRef } from "react"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"

const Loading = ({ title }) => {
  const [progress, setProgress] = useState(0)
  const [buffer, setBuffer] = useState(10)

  const progressRef = useRef(() => {})

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress((prevProgress) => prevProgress + diff)
        setBuffer((prevProgress) => prevProgress + diff + diff2)
      }
    }
  }, [progress])

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-10 backdrop-blur-sm z-20 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full content-center  md:w-1/3 h-auto py-10 -mt-20 mx-auto bg-white px-10 rounded-md">
        <div className="">
          <h2 className="text-4xl pb-2 text-center">{title}</h2>
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Loading
