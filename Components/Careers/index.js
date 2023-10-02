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
import gamedevelopment from "../../assets/Animations/gamedevelopment.png"
import gameprops from "../../assets/Animations/gameprops.png"
import gameshader from "../../assets/Animations/gameshader.png"
import game from "../../assets/Animations/game.png"
import max from "../../assets/Animations/max.png"
import maya from "../../assets/Animations/maya.png"
import mixamo from "../../assets/Animations/mixamo.png"
import mobilegame from "../../assets/Animations/mobilegame.png"
import modeling from "../../assets/Animations/modeling.png"
import multiplayergames from "../../assets/Animations/multiplayergames.png"
import substance from "../../assets/Animations/substance.png"
import trailer from "../../assets/Animations/trailer.png"
import unity from "../../assets/Animations/unity.png"
import unreal from "../../assets/Animations/unreal.png"
import career from "../../assets/01.png"



const data = [
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
    { icon: <Image alt="mon studious" src={game} />, name: "Game Art" }, { icon: <Image alt="mon studious" src={game} />, name: "AAA" },
    { icon: <Image alt="mon studious" src={gamedevelopment} />, name: "Game development" }, { icon: <Image alt="mon studious" src={modeling} />, name: "3D Modelling" },
    { icon: <Image alt="mon studious" src={animations} />, name: "3D Animations" }, { icon: <Image alt="mon studious" src={mobilegame} />, name: "Mobile Games" },
    { icon: <Image alt="mon studious" src={gameprops} />, name: "Game Props" }, { icon: <Image alt="mon studious" src={multiplayergames} />, name: "Multiplayer Games" },
    { icon: <Image alt="mon studious" src={gameshader} />, name: "Game Shaders" }, { icon: <Image alt="mon studious" src={trailer} />, name: "Teaser Trailer" }
  ];
  const [data, setData] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [more, setMore] = useState(false);

  const handleMore = (i) => {
    setMore(i);

  }
  const updateBooleanStateAtIndex = (index, newValue) => {
    // Create a copy of the current state array

    const updatedJobs = [...jobs];




  };

  const handleButtonClick = (index) => {
    const updatedJobs = [...jobs]; // Create a copy of the current state array
    const currentItem = updatedJobs[index]; // Get the item at the specified index

    // Toggle the "more" property of the current item
    currentItem.more = !currentItem.more;

    // alert('Updated Jobs:', updatedJobs); // Debugging

    // Update the state with the modified item
    setJobs(updatedJobs);
  };


  // const handleLess = (i) => {
  //   setMore(false);
  // }

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
        // Iterate through the response data and add a boolean field to each item
        const modifiedData = response.data.map(item => ({
          ...item,
          more: false, // You can replace 'yourBooleanField' with the desired field name and value.
        }));

        // Save the modified data in the state
        setJobs(modifiedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {

  }, [jobs]);

  return <>
    <Header />

    {/* {data?.map(data, */}
    <Grid container spacing={0} className={styles.banner}>

      <Grid item lg={5} md={6} sm={11} style={{ marginRight: "2% !important" }} className={`mr2p m7 ${styles.hero}`}>
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
        <img alt="mon studious"
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
    <h1 className={styles.jobheading}>Careers  </h1>


    <Grid container spacing={6} className={styles.jobs}>

      {jobs && jobs.length <= 0 ?
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Image src={career}  />
        </div> :
        <>
          {jobs?.map((item, i) =>
            <Grid className='fade-in' item lg={5} md={6} sm={11} >
              <Grid container spacing={3} className={styles.jobcard}>
                <Grid item lg={item.image ? 7 : 11} >

                  <div >
                    <h2>{item.title}</h2>
                    <div className={styles.small}>

                      <h6>{item.is_full_time_role ? "fulltime" : "part time"}</h6>
                      <h6>{item.is_remote_role ? "Remote" : "(On site)"}</h6>


                    </div>
                    {!item.more ?
                      <p style={{ maxHeight: "80px", overflow: "hidden", lineHeight: "21px" }}> {item.job_role}...</p> :

                      <p style={{ overflow: "hidden" }}> {item.job_role.substring(0, 220)}</p>}

                    {item.more && (
                      <>
                        <b>Requirements</b>
                        <p style={{ overflow: "hidden" }}>{item.requirements}</p>
                      </>
                    )}

                    <h5><b>Job Posted :</b>{item.created_at}</h5>

                  </div>
                </Grid>
                {item.image ?
                  <Grid item lg={4} >
                    <img alt="mon studious" style={{ width: "100%", height: "152px", marginTop: "27px" }} src={item.image} />
                  </Grid>

                  : null}
                <div style={{ width: "100%", textAlign: "end" }}>{item.more !== false ? <a onClick={() => handleButtonClick(i)}>View less</a> : null}<Button variant='contained' onClick={() => handleButtonClick(i)}>{item.more ? "Apply" : "view more"}</Button></div>



              </Grid>


            </Grid>

          )}
        </>}
    </Grid>




    <Footer />
    {/* <DynamicStyles /> */}
  </>;
}


export default Careers;