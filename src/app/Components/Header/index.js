
// import styles from "./index.module.scss"
'use client'
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";


function Header()  {
const [isOpen, setisOpen] = useState(true);
 
        return         <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} >
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </>;
}

export default Header;