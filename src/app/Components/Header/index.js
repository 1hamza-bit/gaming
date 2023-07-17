
// import styles from "./index.module.scss"
'use client'
import styled from "@emotion/styled";
import { AppBar, Box, Button, Drawer, Toolbar, Typography, makeStyles } from "@mui/material";
import { useState } from "react";


function Header()  {
const [isOpen, setIsOpen] = useState(false);



const StyledDrawer = styled(Drawer)({
    width: 240,
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
                    <AppBar position="static" className="bgwhite">
                        <Toolbar>
                            <Button onClick={toggleDrawer}> 
                            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} >
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            </Button>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
      >
        <StyledDrawerContainer>
          <p>hamza</p>
        </StyledDrawerContainer>
      </StyledDrawer>
                </Box>

              
            </>;
}

export default Header;