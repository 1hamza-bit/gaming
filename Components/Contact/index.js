'use client'
import Header from '../Header';
import { AppBar, Button, CssBaseline, Grid, List, ListItem, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import letterclosed from "../../assets/lclosed.png"
import asset from "../../assets/asset.png"
import opened from "../../assets/lopen.png"
import contact1 from "../../assets/contact/contact1.png"
import contact2 from "../../assets/contact/contact2.png"
import contact3 from "../../assets/contact/contact3.png"
import contact4 from "../../assets/contact/contact4.png"
import contact5 from "../../assets/contact/contact5.png"
import contact6 from "../../assets/contact/contact6.png"
import contact7 from "../../assets/contact/contact7.png"
import contact8 from "../../assets/contact/contact8.png"
import contact9 from "../../assets/contact/contact9.png"
import Footer from '../Footer';
import styled from '@emotion/styled';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

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
  const [data, setData] = useState(null);
  const [emails, setEmails] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [showComponent, setshowComponent] = useState(true);

  


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
       let emails = response.data.filter((item) => item.is_active === true)
        setEmails(emails);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

       axios.get('https://kobmob.pythonanywhere.com/api/our-faq')
      .then(response => {
        // Save the response data in the state
       const faqs = response.data.filter(item => item.is_active === true);
       faqs.map(item => ({ ...item, visible: false }));
        setFaqs(faqs);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });


  }, []);


  return <>
    <Header />
    <Grid container spacing={2} className={styles.bannerc}>
  
      <Grid item lg={5} md={6} sm={9} xs={9}  className={`m7 ${styles.heroc}`}>
        <h1>Get in Touch with   <span> Mobstudios</span></h1>
        <h3>{data && data[0].title}</h3>

        <Typography >{data && data[0].description}</Typography>

        <img alt="mon studious"
          src={data && data[0].image}
          className={styles.imageContainer}
          width={300}
        />

      </Grid>
      <Grid  item lg={6} md={6} sm={11} xs={12}>

      <Grid container spacing={2} className={styles.bannerc}>
    
      <Grid  item lg={12} md={12} sm={11} xs={12}>
        <div className={styles.div}>
          <div className={styles.computer}>
        <Image alt="mon studious"
            src={contact1}
            className={styles.cm1}
           
          />
          <Image alt="mon studious"
            src={contact2}
            className={styles.cm2}
           
          />
          </div>
       
          <div className={styles.letter}>
          <Image alt="mon studious"
            src={letterclosed}
            className={styles.letter1}
            width={120}
          />
          <Image alt="mon studious"
            src={opened}
            className={styles.letter2}
            width={120}
          />
         </div>
        
        </div>
       

        <List className={styles.listmenu}>
        {emails &&   emails.map((email, index) => (
        
          <ListItem className={`${styles.item} `}   >
       
            <ListItemText primary={email.department}         secondary={
          <a href={`mailto:${email.email}`} >
            {email.email}
          </a>
        }
 style={{
              fontSize: "26px !important"
            }} />
            {/* <a href={`mailto:${email.department}`} >{email.department}</a> */}
          </ListItem>
          

))}
      
        </List>

        </Grid>
        <Grid  item lg={12} md={12} sm={11} xs={12}>
    
        <div className={styles.div}>
            <div className={styles.comp}>
        <Image alt="mon studious"
            src={contact5}
            className={styles.cm5}
           
          />
          <Image alt="mon studious"
            src={contact6}
            className={styles.cm6}
           
          />
           <Image alt="mon studious"
            src={contact9}
            className={styles.cm9}
           
          /> <Image alt="mon studious"
          src={contact3}
          className={styles.cm3}
         
        />
         <Image alt="mon studious"
            src={contact8}
            className={styles.cm8}
           
          /> <Image alt="mon studious"
          src={contact4}
          className={styles.cm4}
         
        />
        
       
        
          <Image alt="mon studious"
            src={contact7}
            className={styles.cm7}
            width={120}
          />
         
        
        </div>
        
        </div>
      </Grid>
        </Grid>
        

{/* <div style={{alignContent:"end", display: "flex", justifyContent: "end", width: "90%", marginTop: "5%", marginBottom: "3%"}}>
        <Image alt="mon studious"
          src={asset}
        className={styles.icon}
          width={100}
          style={{width: "20% !important"}}
        />
        </div> */}
      </Grid>
    </Grid>


    {/* <Grid container spacing={4} className={styles.contact} ref={containerRef}>

      {/* <Grid item lg={5} md={6} sm={11}>
        <Paper style={stickyHeaderStyle} className={`${styles.right} ${styles.stickyHeader}`} ref={headerRef}>
          <Typography variant="h6">Sticky Heading</Typography>
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={11} className={styles.listContainer}>
        <List>
          {faqs && faqs.map((item, index) => (
            <div className={styles.faq}>
            <ListItem key={item.id}>
              <ListItemText primary={item.question} />
              <div>
                <input id="checkbox2" type="checkbox" checked={item.visible} />
                  <label class="toggle toggle2" for="checkbox2">
                    <div id="bar4" class="bars"></div>
                    <div id="bar5" class="bars"></div>
                    <div id="bar6" class="bars"></div>
                  </label>
              </div>
              
              
            </ListItem>
              {item.visible ? 
            <div> <Typography >{item.answer}</Typography></div>
            : null }

            </div>
          ))}
        </List>

      </Grid> 
    </Grid> */}



    <Footer />
  </>;
}


export default Contacts;