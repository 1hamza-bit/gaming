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
import animations from "../../assets/Animations/animations.png"
import assets from "../../assets/Animations/assets.png"
import blender from "../../assets/Animations/blender.png"
import gamedevelopment from "../../assets/Animations/game development.png"
import gameprops from "../../assets/Animations/game props.png"
import gameshader from "../../assets/Animations/game shader.png"
import game from "../../assets/Animations/game.png"
import max from "../../assets/Animations/max.png"
import maya from "../../assets/Animations/maya.png"
import mixamo from "../../assets/Animations/mixamo.png"
import mobilegame from "../../assets/Animations/mobile game.png"
import modeling from "../../assets/Animations/modeling.png"
import multiplayergames from "../../assets/Animations/multiplayer games.png"
import substance from "../../assets/Animations/substance.png"
import trailer from "../../assets/Animations/trailer.png"
import unity from "../../assets/Animations/unity.png"
import unreal from "../../assets/Animations/unreal.png"


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
    { icon: <Image src={game} />, name: "Game Art" }, { icon: <Image src={game}/>, name: "AAA" },
    { icon: <Image src={gamedevelopment}/>, name: "Game development" }, { icon: <Image src={modeling}/>, name: "3D Modelling" },
    { icon: <Image src={animations}/>, name: "3D Animations" }, { icon: <Image src={mobilegame}/>, name: "Mobile Games" },
    { icon: <Image src={gameprops}/>, name: "Game Props" }, { icon: <Image src={multiplayergames}/>, name: "Multiplayer Games" },
    { icon: <Image src={gameshader}/>, name: "Game Shaders" }, { icon: <Image src={trailer}/>, name: "Teaser Trailer" }
  ];
  const [data, setData] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [more, setMore] = useState(false);

  const handleMore = (i) => {
    setMore(true);

  }

  const handleLess = (i) => {
    setMore(false);
  }

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

      axios.get('https://kobmob.pythonanywhere.com/api/career')
      .then(response => {
        // Save the response data in the state
        setJobs(response.data);
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
        >  <h1>{data && data[0].title}</h1>
          <Typography >{data && data[0].description}</Typography>
         
        </motion.div>
      </Grid>
      <Grid item lg={5} md={6} sm={11}>
        <img
          src={data && data[0].image}
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
      {jobs?.map ((item, i) => 
      <Grid item lg={5} md={6} sm={11} onClick={() => handleMore(i)}>
      <Grid container spacing={3} className={styles.jobcard}>
      <Grid item lg={item. image ? 7: 11} >

        <div >
              <h2>{item.title}</h2>
        <div className={styles.small}>

              <h6>{item.is_full_time_role ? "fulltime" : "part time"}</h6>
              <h6>{item.is_remote_role ? "Remote" : "(On site)"}</h6>


              </div>
        {    !more ?
            <p style={{maxHeight: "80px", overflow: "hidden", lineHeight: "21px"}}> {item.job_role}...</p>:

            <p style={{ overflow: "hidden"}}> {item.job_role.substring(0, 220)}</p>}
            
          {more ?
          <>
            <b>Requirements</b>
            <p style={{ overflow: "hidden"}}> {item.requirements}</p>
            </>: ""
}

            <h5><b>Job Posted :</b>{item.created_at}</h5>

        </div>
        </Grid>
        {item.image?
        <Grid item lg={4} >
          <img style={{    width: "100%", height: "152px",  marginTop: "27px"}} src={item.image} />
        </Grid>

        : null }
        <div style={{width: "100%", textAlign: "end"}}>{more ?<a onClick={handleLess}>View less</a> : null }<Button variant='contained' onClick={() => handleMore(i)}>{more ? "Apply" : "view more"}</Button></div>
          

       
          </Grid>

          
          </Grid>
       
      )}

          </Grid>



    <Footer />
    {/* <DynamicStyles /> */}
  </>;
}


export default Careers;