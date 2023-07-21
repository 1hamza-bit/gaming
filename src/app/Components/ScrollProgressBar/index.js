'use client'

import { LinearProgress } from "@mui/material";

const { useEffect, useState } = require("react");


const ScrollProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const percent = (scrollTop / documentHeight) * 100;
        setScrollPercent(percent);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const colorPrimary = '#980101'; // Primary color
  const colorSecondary = '#fff'; // Secondary color

  
    return <>
      <LinearProgress
        variant="determinate"
        value={scrollPercent}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          // Customize the colors using CSS
          background: colorSecondary,
          '& .MuiLinearProgress-bar': {
            background: colorPrimary,
          },
        }}
      />
      </>
    
  };
  
  export default ScrollProgressBar;