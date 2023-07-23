'use client'

import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss"
import YouTubeIcon from '@mui/icons-material/YouTube';
import discord from '../../../../assets/discord.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, Typography, makeStyles } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Image from "next/image";

function Footer()  {
    const [isOpen, setisOpen] = useState(true);
     
            return         <>
            <Grid container spacing={2} className={styles.footer}>
            <Grid item lg={4} md={6} sm={11} className='m4'>
                    <h1>Mob Studios </h1>
                    <p>Develop and Design all types of games and art for your IOS and Android stores with all of the features involved
and lunch it in the real world and make your games with your full control, customization, and Art

</p>

<h3 className="mt15">Sign up to our newletter</h3>
<TextField variant="standard" fullWidth/>
<h4>2023 Mob Studios, Inc</h4>

                </Grid>
                    
                <Grid item lg={3} md={6} sm={11} className='m2'>
                {/* <List className={styles.list}>
      <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List> */}
                    
                </Grid>
                <Grid item lg={3} md={6} sm={11} className='m2'>
                {/* <List className={styles.list}>
      <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <YouTubeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <Image  src={discord} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <LinkedInIcon />
          </ListItemIcon>
        </ListItem>
      
      </List> */}
                        
                    
                    </Grid>
            </Grid>

            </>
}
export default Footer ;