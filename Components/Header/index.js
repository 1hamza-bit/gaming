// import styles from "./index.module.scss"
'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Modal, Paper,  Toolbar, Typography, makeStyles } from "@mui/material";
import { useEffect, useState } from "react";
import styles from './index.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useRouter } from "next/router";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo from "../../assets/Logo.png"
import logo3d from "../../assets/logo3.png"
import logof from "../../assets/New_Logo.png"
import logof2 from "../../assets/logof2.png"
import Image from "next/image";
import { motion } from 'framer-motion';
import { createGlobalStyle } from "styled-components";
import Slide from '@mui/material/Slide';
import TemporaryDrawer from "./drawe";
import Sidebar from "./drawe";
import { useClickAway } from "@uidotdev/usehooks";


function Header()  {

const [isOpen, setIsOpen] = useState(false);
const [isTogglePending, setIsTogglePending] = useState(false);

const ref = useClickAway(() => {
  setIsOpen(false);
});

const router = useRouter();
const gridItemVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

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


const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 270,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    minWidth: 250,
    width: 270,
    transition: 'transform 0.5s, width 0.5s ease-in-out, opacity 0.5s ease-in-out',
    '&.MuiDrawer-open': {
      transform: 'translateX(0)',
      width: '270px',
      opacity: 1,
    },
    '&.MuiDrawer-paperAnchorLeft': {
      transform: 'translateX(-100%)',
      width: 0,
      opacity: 0,
    },
  },
}));

const StyledDrawerPaper = styled('div')({
  width: 240,
});

const StyledDrawerContainer = styled('div')({
  overflow: 'auto',
  marginLeft: '240px',
  transition: 'margin-left 0.5s ease-in-out',
});

const useStyles = styled((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  paper: {
    borderRadius: '16px', // Adjust the border radius as needed
    padding: theme.spacing(2),
  },
}));

const toggleDrawer = () => {
  // If a toggle is pending (drawer was just closed), do not reopen immediately
  if (isTogglePending) {
    setIsTogglePending(false);
  } else {
    setIsOpen(!isOpen); // Toggle the isOpen state
  }
};

// Listen for changes to isOpen and set a pending toggle if it's true
useEffect(() => {
  if (isOpen) {
    setIsTogglePending(true);
  }
}, [isOpen]);

const paperStyles = {
  transition: 'all 5.3s ease-in-out, width 5.3s ease-in-out !important',
  borderBottomRightRadius: '5vw', // Adjust the radius as needed
  // Add any other styles you want here
  width: isOpen ? '300px' : '0px',
};
const classes = useStyles();
        return         <>
        {isOpen && <div className="backdrop"> </div>}
                <Box sx={{ flexGrow: 1 }}>
         
                    <AppBar position="static" className={`bggrey ztop ${styles.header}`}>
                        <Toolbar>
                        <button onClick={!isOpen && toggleDrawer} className={styles.hambutton}>
    <div className={`hamburger-icon ${isOpen ? 'open redline' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
    </div>
</button>
                            <Typography className={` fantasy ${styles.logo}`} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {/* Mob Studios */}
                                <Image 
                                src={logof}
                                // width={220}
                                onClick={handleHomeClick}
                                />
                             {/* <Sidebar /> */}
                               {/* <span> Mob Studios</span>  */}
                            </Typography>
                            <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
                            <Button onClick={handlePortfolioClick} className={styles.buttonp}>Portfolio <ArrowOutwardIcon /></Button> 
                            </motion.div>
                        </Toolbar>
                    </AppBar>
                    
                    {/* {isOpen && <button className="backdrop" onClick={toggleDrawer}  />} */}
                    {/* <GlobalPaperStyles /> */}
                    
                    <div ref={ref}
        classes={{
          paper: StyledDrawerPaper,
        }}
        anchor="left"
        open={isOpen}
        className={` ${styles.drawer} jc ${isOpen ? styles.open  : styles.closed}`}
      >
        <Paper className={styles.custom}>
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
        </Paper>
        
        
      </div>
      

    
    
   
                </Box>

              
            </>;
}

export default Header;