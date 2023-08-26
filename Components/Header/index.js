
// import styles from "./index.module.scss"
'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import styles from './index.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useRouter } from "next/router";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo from "../../assets/Logo.png"
import logo3d from "../../assets/Logo.png"
import Image from "next/image";



function Header()  {
const [isOpen, setIsOpen] = useState(false);
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


const StyledDrawer = styled(Drawer)({
    minWidth: 250,
    width: 270,
    flexShrink: 0,
  });
  
  const StyledDrawerPaper = styled('div')({
    width: 240,
  });
  
  const StyledDrawerContainer = styled('div')({
    overflow: 'auto',
  });

const toggleDrawer =() => {
    setIsOpen(!isOpen)
}
 
        return         <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" className={`bgwhite ztop ${styles.header}`}>
                        <Toolbar>
                            <button onClick={toggleDrawer} className={styles.hambutton}> 
                            <div className={`hamburger-icon ${isOpen ? 'open redline' : ''}`} >
                                <div className="line "></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            </button>
                            <Typography className={` fantasy ${styles.logo}`} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {/* Mob Studios */}
                                <Image 
                                src={logo}
                                width={70}
                                />
                            </Typography>
                            <Button className={styles.buttonp}>Portfolio <ArrowOutwardIcon /></Button> 
                        </Toolbar>
                    </AppBar>
                    
                    <StyledDrawer
        classes={{
          paper: StyledDrawerPaper,
        }}
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        className={`minw100p jc ${styles.drawer} ${isOpen ? '' : styles.closed}`}
      >
        <StyledDrawerContainer>
          <p></p>
          <Container className={styles.container}>
      <List className={styles.list}>
      <ListItem className={styles.item} onClick={handleHomeClick}>
          <ListItemIcon className={styles.icon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className={styles.item}  onClick={handleAboutClick}>
          <ListItemIcon className={styles.icon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem className={styles.item} onClick={handlePortfolioClick}>
          <ListItemIcon className={styles.icon}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem className={styles.item} onClick={handleContactClick}>
          <ListItemIcon className={styles.icon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem className={styles.item} onClick={handleCareerClick}>
          <ListItemIcon className={styles.icon}>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Career" />
        </ListItem>
      </List>
    </Container>
        </StyledDrawerContainer>
        
        
      </StyledDrawer>
   
                </Box>

              
            </>;
}

export default Header;