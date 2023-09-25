'use client'
import Header from '../Header';
import { Button, Grid, List, ListItem, ListItemText, Typography, makeStyles } from '@mui/material';
import styles from './index.module.scss'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import Footer from '../Footer';
import styled from '@emotion/styled';
import axios from 'axios';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import asset from "../../assets/asset.png"


const StyledListItemText = (props) => (
  <ListItemText
    style={{
      fontSize: "26px"
    }}
  />
);
function Abouts() {
  const gridItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const gridItemVariantsimg = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const [selected, setSelected] = useState("Mobile Game Development");
  const [initialLoad, setInitialLoad] = useState(true);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);
  const [data, setData] = useState("");
  const [assets, setAssets] = useState(null);
  const [why, setWhy] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible((prevVisible) => !prevVisible);
  //     setBlinkCount((prevCount) => prevCount + 1);
  //   }, 100); // Change this value to control the blink frequency

  //   return () => {
  //     clearInterval(interval);
  //     if (blinkCount >= 2) {
  //       setIsVisible(true);
  //     }
  //   };
  // }, [blinkCount]);
  useEffect(() => {
    const img = new Image();
    img.src = data[0]?.image;
    img.onload = () => {
      // Image has loaded
      setImageLoaded(true);
    };
  }, [data[0]?.image]);
  

  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/about-banner')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axios.get('https://kobmob.pythonanywhere.com/api/about-asserts')
      .then(response => {
        // Save the response data in the state
        setAssets(response.data);
        setSelected(response.data[0])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });


      axios.get('https://kobmob.pythonanywhere.com/api/why-chose-us')
      .then(response => {
        // Save the response data in the state
        setWhy(response.data);
        setSelectedItem(response.data[0])

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };



  const handleUpdate = (value) => {

    setSelected(value)
    setIsVisible(true)
  }

  return <>
    <Header />
    <Grid container spacing={2} className={` ${styles.banner2}`}>
   
      <Grid item lg={4} md={6} sm={11} className={`m7 ${styles.hero2}`}>
      <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.9, delay: 0.9 }}
        > 
        <h1>{data && data[0].title}</h1>
    {/* </motion.div> */}
        <Typography >{data && data[0].description}
        </Typography>
        </motion.div>

      </Grid>
      
    
      <Grid item lg={5} md={6} sm={11} style={{ justifyContent: "center !important", display: "flex !important" }}>
      <motion.div
          initial="hidden"
          animate={{ imageLoaded ? "visible" : "hidden" }}
          variants={gridItemVariantsimg}
          transition={{ duration: 0.9, delay: 0.9 }}
        > 
      <img
          src={data && data[0].image}
          className={styles.imageContainer}
          width={600}
        />
         </motion.div>
      </Grid>
     
    </Grid>


    <Grid container spacing={2} className={styles.services}>


      <Grid   item lg={6} md={6} sm={11} className={` jc ${styles.left}` }>
      <h1 style={{marginLeft: "20px"}}>Our <span>Assets</span></h1>
      <AnimatePresence mode="wait">
  {selected && (
    <motion.div
      key={selected.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <img
          src={selected.image}
          className={styles.imageContainer}
          width={300}
          alt={selected.assert_title}
        />

        <div className={`${styles.textbox} ${styles.loaded}`}>
          <h3>{selected.assert_title}</h3>
          <p>{selected.assert_detail}</p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>



      </Grid>

      <Grid   item lg={6} md={6} sm={11}>
      

        <List className={`fade-in ${styles.listmenu}`}>
        {assets ?
          assets.map((product, index) => (
          <ListItem className={`${styles.item} ${selected === product ? 'maincolor' : ''}`} onClick={() => handleUpdate(product)} >

            <ListItemText primary={product.assert_title} style={{
              fontSize: "26px !important"
            }} />
          </ListItem>
           )):
           <p>There are not  assets at this while.</p> 
             }

        </List>

      </Grid>
   
   
 </Grid>


    <Grid container spacing={2} className={styles.choose}>
      {/* Left Grid: Image description */}
      <Grid item lg={6} md={6} sm={11} className={` ${styles.chooseleft}`}>
      <h1 className="fade-in"  style={{marginLeft: "30px", marginBottom: "15px"}}>Why choose <span>Mob studios</span></h1>
        
        <div className=' fade-in pl5p'>
          {/* <h1>{selectedItem.title}</h1> */}
          {/* <Typography variant="subtitle1">{selectedItem}</Typography> */}
          <p>{selectedItem.description}</p>
        </div>
      </Grid>

      {/* Right Grid: List of items */}
      <Grid item lg={6} md={6} sm={11}>
        <Grid container spacing={4} className={styles.blockscontainer}>
          <Grid  item lg={9} md={9} sm={10} style={{marginBottom: "5% !important"}}>
            <Grid className="fade-in"  container spacing={6}>
              {why?.map((item, index) => (
                <Grid item xs={4}>
                  <img src={item.image} />
                  <Button
                    key={index}
                    button
                    className={`${styles.block} ${selectedItem === item ? styles.selected : ''}`}
                    selected={selectedItem === item}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.title}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <div className="fade-in"  style={{alignContent:"end", display: "flex", justifyContent: "start", width: "90%", marginLeft: "0%", marginTop: "-9%", marginBottom: "4%"}}>
        <Image
          src={asset}
          // className={styles.imageContainer}
          width={170}
        />
        </div>      

    <Footer />
  </>;
}


export default Abouts;