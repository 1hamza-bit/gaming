// import { Provider } from 'react-redux'
import { useEffect, useState } from 'react';
import ScrollProgressBar from '../Components/ScrollProgressBar'
import '../styles/globals.css'
import { Parallax } from 'react-parallax';
import { debounce } from '@mui/material';


export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const [shouldFadeIn, setShouldFadeIn] = useState(false);

  useEffect(() => {
    // Function to check if an element is in the viewport
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to handle the scroll event
    const handleScroll = () => {
      // Get all the elements with the "fade-in" class
      const elements = document.querySelectorAll('.fade-in');

      elements.forEach((element) => {
        if (isElementInViewport(element) && !element.classList.contains('fade-in-visible')) {
          element.classList.add('fade-in-visible');
        }
      });
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = debounce(() => {
    // Your scroll event handling code here
  }, 10); // Adjust the debounce delay as needed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <Parallax  strength={5000}>
    <ScrollProgressBar />
    {/* {isLoading? 
    <h1 style={{margin: "20%"}}>Mob Studios Loading...</h1> : */}
    <Component {...pageProps} />
{/* } */}
  </Parallax>

}
