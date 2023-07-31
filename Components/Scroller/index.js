import styles from './index.module.css';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import { Box, Grid, Typography } from '@mui/material';

const Brands = () => {
  // Simulated list of brands
  const allBrands = [
   {icon: <ExtensionTwoToneIcon color="primary" />, name:  "Game Art"}, {icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "AAA"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game development"}, {icon: <ExtensionTwoToneIcon />, name: "3D Modelling"},
   {icon: <ExtensionTwoToneIcon />, name: "3D Animations"}, {icon: <ExtensionTwoToneIcon />, name: "Mobile Games"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game Props"}, {icon: <ExtensionTwoToneIcon />, name: "Multiplayer Games"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game Shaders"}, {icon: <ExtensionTwoToneIcon />, name: "Teaser Trailer"}
  ];

  const allBrands2 = [
    {icon: <ExtensionTwoToneIcon color="primary" />, name:  "Unity"}, {icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "Blender3D"}, 
    {icon: <ExtensionTwoToneIcon />, name: "MAYA"}, {icon: <ExtensionTwoToneIcon />, name: "3D Max"},
    {icon: <ExtensionTwoToneIcon />, name: "Substance Painter"}, {icon: <ExtensionTwoToneIcon />, name: "Mixamo "}, 
    {icon: <ExtensionTwoToneIcon />, name: "Unreal"}, 
   ];



  const extendedBrands = [...allBrands, ...allBrands, ...allBrands]; // Duplicating the brands
  const extendedBrands2 = [...allBrands2, ...allBrands2, ...allBrands2]; // Duplicating the brands


  return (
    <div className={styles.container}>
      <h1>The <b>services</b> we are amazing with</h1>
      <div className={styles.brands}>
        {extendedBrands.map((brand, index) => (
          <div className={styles.brandItem} key={index}>{brand.icon} &nbsp;  {brand.name}</div>
        ))}
      </div>
      <h1>Testimonials</h1>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={11}>
          <Box className={`m2 ${styles.testimonial}`}>

            <Typography>The quality, consistency and affordability of Synty assets make them an incredible resource for students and independent developers.</Typography>

            <div className={styles.bottomsection}> 
            <h3>Name...</h3>
            <p>Name...</p>
            <p>Name...</p>


            </div>

          </Box>
          </Grid>
          </Grid>
          .
          
      <h1>Provide you when needed</h1>
          <div className={styles.brands2}>
        {extendedBrands2.map((brand, index) => (
          <div className={styles.brandItem} key={index}>{brand.icon} &nbsp;  {brand.name}</div>
        ))}
      </div>

       

    </div>
  );
};

export default Brands;
