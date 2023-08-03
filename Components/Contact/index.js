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
        <h1>Get in <span> Touch</span></h1>

        <Typography >We're excited to collaborate with you and bring your game ideas to life. Getting in touch with us
             is simple, and we're here to provide you with the best possible service.</Typography>

      </Grid>
      <Grid item lg={5} md={6} sm={11}>
        <Image
          src={letterclosed}
          className={styles.letter1}
          width={200}
        />
           <Image
          src={opened}
          className={styles.letter2}
          width={200}
        />
      </Grid>
    </Grid>


    <Grid container spacing={2} className={styles.contact}>
      <Grid item lg={6} md={6} sm={11}>
      <Image
          src={robot}
          className={styles.imageContainer}
          width={300}

        />
         
   
      </Grid>
      <Grid item lg={6} md={6} sm={11}>
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


    <Footer />
  </>;
}


export default Contacts;