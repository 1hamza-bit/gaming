'use client'

import { Grid, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss"
import YouTubeIcon from '@mui/icons-material/YouTube';
import discord from '../../assets/discord.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, Typography, makeStyles } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Image from "next/image";
import { useRouter } from "next/router";

function Footer()  {
    const [isOpen, setisOpen] = useState(true);
const router = useRouter();

    const handleHomeClick = () => {
      router.push('/');
    };
    
    const handleAboutClick = () => {
      router.push('/about');
    };
    
    const handleContactClick = () => {
      router.push('/contact');
    };
    
     
            return         <>
            <Grid container spacing={2} className={styles.footer}>
            <Grid item lg={4} md={6} sm={11} className='m4'>
                    <h1>Mob Studios </h1>
                    <p>Develop and Design all types of games and art for your IOS and Android stores with all of the features involved
and lunch it in the real world and make your games with your full control, customization, and Art

</p>

<h3 className="mt15">Sign up to our newletter</h3>
    
<TextField variant="outlined"    InputProps={{
    style: {borderRadius: "100vw !important", borderColor: "white !important"},
                    endAdornment: <InputAdornment position="end">
                      <Button className={styles.inputbutton}>Go </Button>
                    </InputAdornment>,
                  }} fullWidth/>
<h4>2023 Mob Studios, Inc</h4>

                </Grid>
                    
                <Grid item lg={3} md={6} sm={11} className={ `m2 ${styles.menu}`}>
                <List className={styles.listmenu}>
      <ListItem className={styles.item}  onClick={handleHomeClick}>
          
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className={styles.item} onClick={handleAboutClick}>
         
          <ListItemText primary="About" />
        </ListItem>
      
      </List>

      <List className={styles.listmenu}>
          
          
        <ListItem className={styles.item}>
          
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem className={styles.item} onClick={handleContactClick}>
          
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
                    
                </Grid>
                <Grid item lg={2} md={6} sm={11} className={ `m2 ${styles.menu}`}>
                <List className={styles.listmenu}>
      <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <YouTubeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <Image height={25}  width={25} src={discord} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemIcon className={styles.icon}>
            <LinkedInIcon />
          </ListItemIcon>
        </ListItem>
      
      </List>
                        
                    
                    </Grid>
            </Grid>

            </>
}
export default Footer ;