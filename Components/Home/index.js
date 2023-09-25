'use client'
import Header from '../Header';
import { Button, Grid, Typography } from '@mui/material';
import Brands from '../Scroller';
import styles from './index.module.scss'
import Footer from '../Footer';
import TopAssets from '../TopAssets';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"
import home3 from "../../assets/home3.png"
import home4 from "../../assets/home4.png"
import home5 from "../../assets/home5.png"

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import dynamic from 'next/dynamic';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const DynamicStyles = dynamic(() => import('./index.module.scss'), { ssr: false });

const items = [
  {
    title: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    title: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    title: 'Item 3',
    description: 'Description for Item 3',
  },
  {
    title: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    title: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    title: 'Item 3',
    description: 'Description for Item 3',
  }, {
    title: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    title: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    title: 'Item 3',
    description: 'Description for Item 3',
  },
  // Add more items as needed
];

function Hero() {
  const [data, setData] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
 

  useEffect(() => {
    const img = new Image();
    img.src = data[0]?.image;
    img.onload = () => {
      // Image has loaded
      setImageLoaded(true);
    };
  }, [data[0]?.image]);
  const gridItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const gridItemVariantsimg = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

 const scrollToBottom = () => {
    window.scrollTo({
      top:  800,
      behavior: 'smooth' // You can change this to 'auto' or 'instant' for different scroll behavior
    });
  };

  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/top-banner')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        alert('Error fetching data:', error.error_message
        );
      });






  }, []);


  const handleHomeClick = () => {
    router.push('/');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };
  

  return <>
    <Header />
    <Grid container spacing={2} className={styles.banner}>

      <Grid item lg={6} md={6} sm={11} className={` ${styles.hero}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >  <h1>{data ? data[0].title : "Game Development & Design Service"}</h1>
          <Typography >{data && data[0].description}</Typography>
          <Button className={styles.button1}>Portfolio <ArrowOutwardIcon /></Button>
          <Button className={styles.button2}>About Us</Button>
        </motion.div>
      </Grid>
      <Grid  item lg={5} md={6} sm={11}>
      <motion.div
          initial="hidden"
          animate={{ imageLoaded ? "visible" : "hidden" }}
          variants={gridItemVariantsimg}
          transition={{ duration: 0.9, delay: 0.9 }}
        > 
         {/* {!imageLoaded ? <p>loading </p>: <img
          src={data && data[0].image}
          className={styles.imageContainer}
          onLoad={handleImageLoad}
          
        // width={700}
        />
         } */}
         <div className={`df ${styles.images}`}>
         <Image
         src={home4}
         className={styles.imageContainer}
          onLoad={handleImageLoad}
         />
         <div className={styles.smallimages}>
         <Image
         src={home5}
         className={styles.imageContainer2}
          onLoad={handleImageLoad}
         /><Image
         src={home1}
         className={styles.imageContainer3}
          onLoad={handleImageLoad}
         /><Image
         src={home2}
         className={styles.imageContainer4}
          onLoad={handleImageLoad}
         /><Image
         src={home3}
         className={styles.imageContainer5}
          onLoad={handleImageLoad}
         />
         </div>
         </div>
        </motion.div>
      </Grid>
      <Grid item lg={3} md={3} sm={3}>

        <Button onClick={scrollToBottom}className={styles.down}><ArrowDownwardIcon className={styles.arrowdown} /> </Button>
      </Grid>

    </Grid>
    <TopAssets items={items} />
    <Brands />


    <Footer />
    {/* <DynamicStyles /> */}
  </>;
}


export default Hero;