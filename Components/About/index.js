'use client'
import Header from '../Header';
import { Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from './index.module.scss'
import { useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import Footer from '../Footer';


function Abouts() {
  const [selected, setSelected] = useState("Mobile Game Development");


  return <>
    <Header />
    <Grid container spacing={2} className={styles.banner}>
      <Grid item lg={5} md={6} sm={11} className={`m7 ${styles.hero}`}>
        <h1>About Mob studios</h1>

        <Typography >Mobstudios is a leading mobile game development and design company specializing in creating captivating and innovative gaming experiences
          for mobile devices.With a team of talented developers, designers, and artists, we bring your game ideas to life and ensure a seamless and immersive
          gaming experience for your audience.
        </Typography>


      </Grid>
      <Grid item lg={6} md={6} sm={11}>
        <Image
          src={robot}
          className={styles.imageContainer}
        />
      </Grid>
    </Grid>


    <Grid container spacing={1}>
      <Grid item lg={6} md={6} sm={11}>
        <Image
          src={robot}
          className={styles.imageContainer}
        />
        {selected === "Mobile Game Development" ?
          <p>At Mobstudios, we excel in developing a wide variety of mobile games across different genres, including action, adventure, puzzle, strategy, and more.
            Our team leverages the latest technologies and industry best practices to deliver high-quality, engaging games that captivate players and keep them coming back for more.
          </p>
          : selected === "Freelance Services" ?

            <p>In addition to our in-house game development projects, we offer freelance services to cater to specific client requirements.
              Whether you need assistance with game design, programming, artwork, or sound effects, our team of experts is available to collaborate with you and provide tailored solutions to meet your project needs.
            </p>
            :

            <p>Mobstudios also specializes in creating and providing Unity assets to enhance game development processes.
              We offer a diverse range of pre-built assets, including character models, animations, environments, sound effects, and more.
              Our Unity assets are designed to accelerate development timelines and empower game developers to create immersive and visually stunning games with ease.
            </p>
        }
      </Grid>
      <Grid item lg={6} md={6} sm={11}>
        <List className={styles.listmenu}>
          <ListItem className={styles.item}>

            <ListItemText value={"Mobile Game Development"} primary="Mobile Game Development" />
          </ListItem>
          <ListItem className={styles.item}>

            <ListItemText value={"Freelance Services"} primary="Freelance Services" />
          </ListItem>

          <ListItem className={styles.item}>

            <ListItemText value={"Unity Assets"} primary="Unity Assets" />
          </ListItem>

        </List>
      </Grid>
    </Grid>


    <Footer />
  </>;
}


export default Abouts;