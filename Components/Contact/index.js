'use client'
import Header from '../Header';
import { AppBar, Button, CssBaseline, Grid, List, ListItem, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import letterclosed from "../../assets/lclosed.png"
import opened from "../../assets/lopen.png"
import Footer from '../Footer';
import styled from '@emotion/styled';
import axios from 'axios';


const stickyHeaderStyle = {
  position: 'sticky',
  top: '0',
  backgroundColor: '#FFF', // Set the background color as needed
  zIndex: '1', // Ensure the sticky header appears above the content
  gridColumn: '1 / span 2', // Span both columns
  padding: '16px', // Add padding as needed
};

const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];


function Contacts() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);


 useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/contact-banner')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      axios.get('https://kobmob.pythonanywhere.com/api/contact-email')
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
            width={120}
          />
          <Image
            src={opened}
            className={styles.letter2}
            width={120}
          />
        </div>

        <List className={styles.listmenu}>
          <ListItem className={`${styles.item} `}   >

            <ListItemText primary="Business Development" secondary="Business Development" style={{
              fontSize: "26px !important"
            }} />
          </ListItem>
          <ListItem className={`${styles.item} `}     >

            <ListItemText primary="Freelance Services" style={{
              fontSize: "26px"
            }} />
          </ListItem>

          <ListItem className={`${styles.item} `}   >

            <ListItemText primary="Unity Assets" style={{
              fontSize: "26px"
            }} />
          </ListItem>

        </List>
      </Grid>
    </Grid>


    <Grid container spacing={4} className={styles.contact} ref={containerRef}>

      <Grid item lg={5} md={6} sm={11}>
        <Paper style={stickyHeaderStyle} className={`${styles.right} ${styles.stickyHeader}`} ref={headerRef}>
          <Typography variant="h6">Sticky Heading</Typography>
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={11} className={styles.listContainer}>
        <List>
          {itemList.map((item, index) => (
            <>
            <ListItem key={index}>
              <ListItemText primary={item} />
              <div>
                <input id="checkbox2" type="checkbox" />
                  <label class="toggle toggle2" for="checkbox2">
                    <div id="bar4" class="bars"></div>
                    <div id="bar5" class="bars"></div>
                    <div id="bar6" class="bars"></div>
                  </label>
              </div>
            </ListItem>
            <Typography >flklsjfkj</Typography>
            </>
          ))}
        </List>

      </Grid>
    </Grid>



    <Footer />
  </>;
}


export default Contacts;