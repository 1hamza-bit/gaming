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
  
        return <>
            <Header />
            <Grid container spacing={0} className={styles.banner}>
                <Grid item lg={4} md={6} sm={11} className= {`m7 ${styles.hero}`}>
                    <h1>Game Development and Design Service</h1>
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
            </Grid>
            <TopAssets items={items} />
            <Brands />


            <Footer />
            {/* <DynamicStyles /> */}
        </>;
    }


export default Hero;