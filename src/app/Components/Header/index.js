
// import styles from "./index.module.scss"
'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemText, Slide, Toolbar, Typography, makeStyles } from "@mui/material";
import { useState } from "react";
import styles from './index.module.scss'

function Header()  {
const [isOpen, setIsOpen] = useState(false);



const StyledDrawer = styled(Drawer)({
    minWidth: 250,
    width: 340,
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
                            <Typography className="ml40p fantasy" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
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
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemText primary="Item 3" />
        </ListItem>
        <ListItem className={styles.item}>
          <ListItemText primary="Item 4" />
        </ListItem>
      </List>
    </Container>
        </StyledDrawerContainer>
        
      </StyledDrawer>
   
                </Box>

              
            </>;
}

export default Header;