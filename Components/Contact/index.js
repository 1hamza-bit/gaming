'use client'
import Header from '../Header';
import { Button, Grid, List, ListItem, ListItemText, Typography, makeStyles } from '@mui/material';
import styles from './index.module.scss'
import { useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import letterclosed from "../../assets/lclosed.png"
import opened from "../../assets/lopen.png"
import Footer from '../Footer';
import styled from '@emotion/styled';



function Contacts() {
  

  return <>
    <Header />
    <Grid container spacing={2} className={styles.bannerc}>
      <Grid item lg={4} md={6} sm={11} className={`m7 ${styles.heroc}`}>
        <h1>Get in Touch with   <span> Mobstudios :</span></h1>
        <h3>( Let's Create Amazing Mobile Games Together!)</h3>

        <Typography >Thank you for your interest in Mobstudios, the premier mobile game development and design company.
           We're excited to collaborate with you and bring your game ideas to life. Getting in touch with us is simple,
           and we're here to provide you with the best possible service.</Typography>

           <Image
          src={robot}
          className={styles.imageContainer}
          width={300}
        />

      </Grid>
      <Grid item lg={5} md={6} sm={11}>
        <div className={styles.div}>
        <Image
          src={letterclosed}
          className={styles.letter1}
          width={70}
        />
           <Image
          src={opened}
          className={styles.letter2}
          width={70}
        />
        </div>

        <List className={styles.listmenu}>
          <ListItem className={`${styles.item} `}   >

            <ListItemText  primary="Business Development" secondary="Business Development"  style={{
      fontSize: "26px !important"
    }} />
          </ListItem>
          <ListItem className={`${styles.item} `}     >

            <ListItemText  primary="Freelance Services"  style={{
      fontSize: "26px"
    }} />
          </ListItem>

          <ListItem  className={`${styles.item} `}   >

            <ListItemText   primary="Unity Assets"   style={{
      fontSize: "26px"
    }}/>
          </ListItem>

        </List>
      </Grid>
    </Grid>


    <Grid container spacing={2} className={styles.contact}>
      <Grid item lg={6} md={6} sm={11}>
    
         
   
      </Grid>
      <Grid item lg={6} md={6} sm={11}>
      
      </Grid>
    </Grid>


    <Footer />
  </>;
}


export default Contacts;