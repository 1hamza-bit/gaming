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
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';

const data =[ 
  {}
]
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

function Careers() {
  const allBrands = [
    { icon: <ExtensionTwoToneIcon color="primary" />, name: "Game Art" }, { icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "AAA" },
    { icon: <ExtensionTwoToneIcon />, name: "Game development" }, { icon: <ExtensionTwoToneIcon />, name: "3D Modelling" },
    { icon: <ExtensionTwoToneIcon />, name: "3D Animations" }, { icon: <ExtensionTwoToneIcon />, name: "Mobile Games" },
    { icon: <ExtensionTwoToneIcon />, name: "Game Props" }, { icon: <ExtensionTwoToneIcon />, name: "Multiplayer Games" },
    { icon: <ExtensionTwoToneIcon />, name: "Game Shaders" }, { icon: <ExtensionTwoToneIcon />, name: "Teaser Trailer" }
  ];
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

  const extendedBrands = [...allBrands, ...allBrands, ...allBrands]; // Duplicating the brands


  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/career-banner')
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

      {/* {data?.map(data, */}
            <Grid container spacing={0}  className={styles.banner}>

      <Grid item lg={5} md={6} sm={11} className={`m7 ${styles.hero}`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.2, delay: 0.2 }}
        >  <h1>Game Development & Design Service</h1>
          <Typography > Mobstudios, is the leading service-based company for Game development,
            Assets Creation, Game Design, 3D Modeling, Shader development, and Many More, According to your Preference.</Typography>
         
        </motion.div>
      </Grid>
      <Grid item lg={5} md={6} sm={11}>
        <Image
          // src={data.image}
          className={styles.imageContainer}
        // width={700}
        />
      </Grid>
      <div className={styles.brands}>
        {extendedBrands.map((brand, index) => (
          <div className={styles.brandItem} key={index}>{brand.icon} &nbsp;  {brand.name}</div>
        ))}
      </div>

      </Grid>
      {/* )}; */}
    
      <Grid container spacing={6}  className={styles.jobs}>

      <Grid item lg={5} md={6} sm={11}>
      <Grid container spacing={0} className={styles.jobcard}>
      <Grid item lg={7} >

        <div >
              <h2>Job title</h2>
        <div className={styles.small}>

              <h6>small</h6>
              <h6>small</h6>


              </div>
            <p>Description</p>

            <h6>date</h6>

        </div>
        </Grid>
        <Grid item lg={4} >
          <Image />
        </Grid>
          </Grid>
          </Grid>
          <Grid item lg={5} md={6} sm={11}>
      <Grid container spacing={0} className={styles.jobcard}>
      <Grid item lg={7} >

        <div >
              <h2>Job title</h2>
        <div className={styles.small}>

              <h6>small</h6>
              <h6>small</h6>


              </div>
            <p>Description</p>

            <h6>date</h6>

        </div>
        </Grid>
        <Grid item lg={4} >
          <Image />
        </Grid>
          </Grid>
          </Grid>


          </Grid>



    <Footer />
    {/* <DynamicStyles /> */}
  </>;
}


export default Careers;