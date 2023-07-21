
// import styles from "./index.module.scss"
'use client'
import styled from "@emotion/styled";
import { AppBar, Backdrop, Box, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Slide, Toolbar, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import styles from './index.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Header()  {
const [isOpen, setIsOpen] = useState(false);



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

  const backdropStyle = {
    background:" rgb(221 221 221 / 50%)",

    width: "100vw !important"
  };

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
                            <Typography className="ml40p fantasy" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Mob Studios
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    
                    <StyledDrawer
        classes={{
          paper: StyledDrawerPaper,
        }}
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        className={`minw100p ${styles.drawer} ${isOpen ? '' : styles.closed}`}
      >
        <StyledDrawerContainer>
          <p>hamza</p>
          <Container className={styles.container}>
      <List className={styles.list}>
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
      </List>
    </Container>
        </StyledDrawerContainer>
        <Backdrop open={isOpen}  style={backdropStyle} />
        
      </StyledDrawer>
   
                </Box>

              
            </>;
}

export default Header;