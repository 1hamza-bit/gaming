import React, { Component } from 'react';
import styles from "./index.module.scss"

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
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
            </>
        );
    }
}

export default Header;