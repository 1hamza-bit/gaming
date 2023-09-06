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
import footer2 from "../../assets/footer2.png"
import footer1 from "../../assets/footer1.png"
import button1 from "../../assets/button1.png"
import button2 from "../../assets/button2.png"
import button3 from "../../assets/button3.png"


function CustomInput({ inputProps }) {
  return (
    <div className={styles.inputbox} style={{borderRadius: "100vw !important"}}>
      <input  {...inputProps} />
      {inputProps.button}
    </div>
  );
}
const customInputProps = {
  type: 'text',
  placeholder: 'Enter your text',
  button: <button className={styles.inputbutton} onClick={() => alert('Button clicked')}>Click Me</button>,
};

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

const handlePortfolioClick = () => {
  router.push('/portfolio');
};

const handleCareerClick = () => {
  router.push('/careers');
};


    const ImageHoverEffect = () => {
      useEffect(() => {
        const imageContainer = document.querySelector(".footeranimate");
        const movableImages = document.querySelectorAll(".movable-image");
    
        imageContainer.addEventListener("mousemove", (event) => {
          const containerRect = imageContainer.getBoundingClientRect();
          const mouseX = event.clientX - containerRect.left;
          const mouseY = event.clientY - containerRect.top;
    
          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;
    
          movableImages.forEach((image) => {
            const moveX = (mouseX - centerX) * 0.05;
            const moveY = (mouseY - centerY) * 0.05;
    
            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
        });
    
        imageContainer.addEventListener("mouseleave", () => {
          movableImages.forEach((image) => {
            image.style.transform = "translate(0, 0)";
          });
        });
      }, []);
    }
    
     
            return         <>
  <div className={styles.bfcontainer}>
            <Button className={styles.getintouch} onClick={handleContactClick}>Get in touch 
            <Image  src={button1} className={styles.img1}/>
            <Image  src={button2} className={styles.img2}/>
            <Image  src={button3} className={styles.img3}/>
            </Button>
            </div>
            <Grid container spacing={2} className={styles.footer}>
            <Grid item lg={4} md={6} sm={11} className='m4'>
                    <h1>Mob Studios </h1>
                    <p>Develop and Design all types of games and art for your IOS and Android stores with all of the features involved
and lunch it in the real world and make your games with your full control, customization, and Art

</p>

<h3 className="mt15">Sign up to our newletter</h3>
    
{/* <TextField variant="outlined"    InputProps={{
    style: {borderRadius: "100vw !important", borderColor: "white !important"},
                    endAdornment: <InputAdornment position="end">
                      <Button className={styles.inputbutton}>Go </Button>
                    </InputAdornment>,
                  }} fullWidth/> */}
                   <CustomInput inputProps={customInputProps} />
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
          
          
        <ListItem className={styles.item} onClick={handlePortfolioClick}>
          
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

            <div className={styles.footeranimate}>
              <Image 
              src={footer2}
              className="movable-image"
              />
              <Image
              src={footer1}
              className="movable-image"
              
              />

            </div>

            </>
}
export default Footer ;