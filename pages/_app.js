// import { Provider } from 'react-redux'
import { useEffect, useState } from 'react';
import ScrollProgressBar from '../Components/ScrollProgressBar'
import '../styles/globals.css'
import { Parallax } from 'react-parallax';
import { debounce } from '@mui/material';


export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for the window.onload event
    window.onload = () => {
      // When the website is fully loaded, hide the loader
      setIsLoading(false);
    };

    // Clean up the event listener when the component unmounts
    return () => {
      window.onload = null;
    };
  }, []);

  useEffect(() => {
    // You can also listen for the DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', () => {
      // When the DOM content is fully loaded, hide the loader
      setIsLoading(false);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('DOMContentLoaded', () => {});
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
    {isLoading? 
    <h1 style={{margin: "20%"}}>Mob Studios Loading...</h1> :
    <Component {...pageProps} />
}
  </Parallax>

}
