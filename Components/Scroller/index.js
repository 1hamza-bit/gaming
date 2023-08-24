import styles from './index.module.scss';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import { Box, Button, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  // Add more product objects here
];

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

   const PrevArrow = (props) => (
    <Button className={styles.prev} onClick={props.onClick} disabled={props.currentSlide === 0}>
       <motion.div
    className={`arrow-prev ${props.currentSlide === 0 ? 'disabled' : ''}`}
    // onClick={props.onClick}
    // whileHover={{ scale: 0.9 }} // Smaller scale on hover
    // whileTap={{ scale: 0.9 }}   // Smaller scale while clicked
  >
      <ArrowBackIcon />
      </motion.div>
    </Button>
  );

  const NextArrow = (props) => (
    <Button className={styles.next} onClick={props.onClick}
      disabled={props.currentSlide === props.slideCount - props.slidesToShow}
    >
      <ArrowForwardIcon />
    </Button>
  );

   const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


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

      <Slider {...settings}>
        {products.map((product, index) => (
        
        <Grid item lg={4} md={6} sm={11} >
        <Box className={`m2 ${styles.testimonial}`}>

          <Typography>The quality, consistency and affordability of Synty assets make them an incredible resource for students and independent developers.</Typography>

          <div className={styles.bottomsection}> 
          <h3>Name...</h3>
          <p>Name...</p>
          <p>Name...</p>


          </div>

        </Box>
        </Grid>
        ))}
      </Slider>
      
          
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
