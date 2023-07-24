'use client'
import Header from '../Header';
import { Button, Grid, Typography } from '@mui/material';
import styles from './index.module.scss'


function About() {

    return <>
        <Header />
        <Grid container spacing={2} className={styles.banner}>
            <Grid item lg={5} md={6} sm={11} className={`m7 ${styles.hero}`}>
                <h1>About Mob studios</h1>
                <Typography >Mobstudios is a leading mobile game development and design company specializing in creating captivating and innovative gaming experiences
                    for mobile devices.With a team of talented developers, designers, and artists, we bring your game ideas to life and ensure a seamless and immersive
                    gaming experience for your audience.
                </Typography>
               
            </Grid>
            <Grid item lg={6} md={6} sm={11}>
                <Image
                    src={robot}
                    className={styles.imageContainer}
                />
            </Grid>
        </Grid>


        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={11}>
            
            </Grid>
            <Grid item lg={6} md={6} sm={11}>
            </Grid>
        </Grid>


        <Footer />
    </>;
}


export default About;