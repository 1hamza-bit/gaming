'use client'
import Header from '../Header';
import { Button, Grid, List, ListItem, ListItemText,  Typography, makeStyles } from '@mui/material';
import styles from './index.module.scss'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import Footer from '../Footer';
import styled from '@emotion/styled';
import { Fade, Flip, Reveal, Slide, Zoom } from 'react-reveal';
import axios from 'axios';


const StyledListItemText = (props) => (
  <ListItemText
    style={{
      fontSize: "26px"
    }}
  />
);
function Abouts() {
  const [selected, setSelected] = useState("Mobile Game Development");
  const [isVisible, setIsVisible] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const [selectedItem, setSelectedItem] = useState(items[0]);
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

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  

  const handleUpdate = (value) => {

    setSelected(value)
    setIsVisible(true)
  }

  return <>
    <Header />
    <Grid container spacing={2} className={styles.banner2}>
      <Grid item lg={4} md={6} sm={11} className={`m7 ${styles.hero2}`}>
        <h1>About <span>Mob studios</span></h1>

        <Typography >Mobstudios is a leading mobile game development and design company specializing in creating captivating and innovative gaming experiences
          for mobile devices.With a team of talented developers, designers, and artists, we bring your game ideas to life and ensure a seamless and immersive
          gaming experience for your audience.
        </Typography>


      </Grid>
      <Grid item lg={5} md={6} sm={11} style={{ justifyContent: "center !important", display: "flex !important" }}>
        <Image
          src={robot}
          className={styles.imageContainer}
          width={600}
        />
      </Grid>
    </Grid>


    <Grid container spacing={2} className={styles.services}>

      <Grid item lg={6} md={6} sm={11} className={styles.left}>
        <Image
          src={robot}
          className={styles.imageContainer}
          width={300}

        />

        {selected === "Mobile Game Development" ?
        <Flip top>
          <div className={`${styles.textbox} ${selected === "Mobile Game Development" ? styles.loaded : ''}`}>
            <h3>{selected}</h3>


            <p> At Mobstudios, we excel in developing a wide variety of mobile games across different genres, including action, adventure, puzzle, strategy, and more.
              Our team leverages the latest technologies and industry best practices to deliver high-quality, engaging games that captivate players and keep them coming back for more.
            </p>
          </div>
          </Flip>
          : selected === "Freelance Services" ?
          <Slide top>

            <div className={`${styles.textbox} ${selected === "Freelance Services" ? styles.loaded : ''}`}>
              <h3>{selected}</h3>
              
              <p>In addition to our in-house game development projects, we offer freelance services to cater to specific client requirements.
                Whether you need assistance with game design, programming, artwork, or sound effects, our team of experts is available to collaborate with you and provide tailored solutions to meet your project needs.
              </p>
            </div>
            </Slide>
            :
            <Fade>
              <div className={styles.textbox}>
                <h3>{selected}</h3>

                <p>Mobstudios also specializes in creating and providing Unity assets to enhance game development processes.
                  We offer a diverse range of pre-built assets, including character models, animations, environments, sound effects, and more.
                  Our Unity assets are designed to accelerate development timelines and empower game developers to create immersive and visually stunning games with ease.
                </p>
              </div>
            </Fade>
        }



      </Grid>
      <Grid item lg={6} md={6} sm={11}>
        <List className={styles.listmenu}>
          <ListItem className={`${styles.item} ${selected === "Mobile Game Development" ? 'maincolor' : ''}`} onClick={() => handleUpdate("Mobile Game Development")} >

            <ListItemText primary="Mobile Game Development" style={{
              fontSize: "26px !important"
            }} />
          </ListItem>
          <ListItem className={`${styles.item} ${selected === "Freelance Services" ? 'maincolor' : ''}`} onClick={() => handleUpdate("Freelance Services")}>

            <ListItemText primary="Freelance Services" style={{
              fontSize: "26px"
            }} />
          </ListItem>

          <ListItem className={`${styles.item} ${selected === "Unity Assets" ? 'maincolor' : ''}`} onClick={() => handleUpdate("Unity Assets")}>

            <ListItemText primary="Unity Assets" style={{
              fontSize: "26px"
            }} />
          </ListItem>

        </List>

      </Grid>
    </Grid>

   

    <Grid container spacing={2} className={styles.choose}>
      {/* Left Grid: Image description */}
      <Grid item xs={6} className={styles.chooseleft}>
          <div>
            <h2>Why Choose <span>us</span> ?</h2>
            <Typography variant="subtitle1">{selectedItem}</Typography>
            <p>dsljfksdjklfjdklsjfksdjklfjklsdjkljklfjsdkljfklsdjklfjsdkl
              jfkjsjklfjdklsjfksdjklfjklsdjkljklfjsdkljfklsdjklfjsdkljfkjsjklfjdklsjfksdjklfjklsdjkljklfjsdkljfklsdjklfjsdkljfkjsdklf</p>
          </div>
      </Grid>

      {/* Right Grid: List of items */}
      <Grid item xs={6}>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              button
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>


    <Footer />
  </>;
}


export default Abouts;