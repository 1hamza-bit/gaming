// import { Provider } from 'react-redux'
import { useEffect } from 'react';
import ScrollProgressBar from '../Components/ScrollProgressBar'
import '../styles/globals.css'
import { Parallax } from 'react-parallax';
import { debounce } from '@mui/material';


export default function App({ Component, pageProps }) {

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
    <Component {...pageProps} />
  </Parallax>

}
