'use client'
import Header from '../Header';
import { Button, Grid, Typography } from '@mui/material';
import Brands from '../Scroller';
import styles from './index.module.scss'
import Footer from '../Footer';
import TopAssets from '../TopAssets';
import Image from 'next/image';
import robot from "../../assets/hero.png"
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
  const gridItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

 const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
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
          transition={{ duration: 0.2, delay: 0.2 }}
        >  <h1>Game Development & Design Service</h1>
          <Typography > Mobstudios, is the leading service-based company for Game development,
            Assets Creation, Game Design, 3D Modeling, Shader development, and Many More, According to your Preference.</Typography>
          <Button className={styles.button1}>Portfolio <ArrowOutwardIcon /></Button>
          <Button className={styles.button2}>About Us</Button>
        </motion.div>
      </Grid>
      <Grid item lg={5} md={6} sm={11}>
        <Image
          src={robot}
          className={styles.imageContainer}
        // width={700}
        />
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