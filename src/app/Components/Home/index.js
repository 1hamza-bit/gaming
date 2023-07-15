import Header from '../Header';
import { Button, Grid, Typography } from '@mui/material';


function Hero() {
  
        return <>
            <Header />
            <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={11} className='m7'>
                    <h1>Game Development and Design Service</h1>
                <Typography > Mobstudios, is the leading service-based company for Game development, 
                    Assets Creation, Game Design, 3D Modeling, Shader development, and Many More, According to your Preference.</Typography>
                    <Button>Portfolio</Button> 
                    <Button>About Us</Button> 
                </Grid>
                <Grid item lg={6} md={6} sm={11}>

                </Grid>
            </Grid>
        </>;
    }


export default Hero;