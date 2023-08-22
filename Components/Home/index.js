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
import { Fade,Reveal } from 'react-reveal';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
      },  {
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

  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
        return <>
            <Header />
            <Grid container spacing={0} className={styles.banner}>

                <Grid item lg={5} md={6} sm={11} className= {`m7 ${styles.hero}`}>
                <Fade left>  <h1>Game Development & Design Service</h1> </Fade>
                <Typography > Mobstudios, is the leading service-based company for Game development, 
                    Assets Creation, Game Design, 3D Modeling, Shader development, and Many More, According to your Preference.</Typography>
                    <Button className={styles.button1}>Portfolio <ArrowOutwardIcon /></Button> 
                    <Button className={styles.button2}>About Us</Button> 

                </Grid>
                <Grid item lg={5} md={6} sm={11}>
                    <Image
                    src={robot}
                    className={styles.imageContainer}
                    // width={700}
                    />
                </Grid>
                <Grid item lg={3} md={3} sm={3}>

                <Button className={styles.down}><ArrowDownwardIcon className={styles.arrowdown} /> </Button>
                </Grid>

            </Grid>
            <TopAssets items={items} />
            <Brands />


            <Footer />
            {/* <DynamicStyles /> */}
        </>;
    }


export default Hero;