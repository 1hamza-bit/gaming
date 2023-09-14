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
import { useEffect, useState } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { yellow } from '@mui/material/colors';
import axios from 'axios';
import animations from "../../assets/Animations/animations.png"
import assets from "../../assets/Animations/assets.png"
import blender from "../../assets/Animations/blender.png"
import gamedevelopment from "../../assets/Animations/game development.png"
import gameprops from "../../assets/Animations/game props.png"
import gameshader from "../../assets/Animations/game shader.png"
import game from "../../assets/Animations/game.png"
import max from "../../assets/Animations/max.png"
import maya from "../../assets/Animations/maya.png"
import mixamo from "../../assets/Animations/mixamo.png"
import mobilegame from "../../assets/Animations/mobile game.png"
import modeling from "../../assets/Animations/modeling.png"
import multiplayergames from "../../assets/Animations/multiplayer games.png"
import substance from "../../assets/Animations/substance.png"
import trailer from "../../assets/Animations/trailer.png"
import unity from "../../assets/Animations/unity.png"
import unreal from "../../assets/Animations/unreal.png"


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

const primary = yellow[500]; // #f44336

const Brands = () => {
  const [data, setData] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/testimonial')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        alert('Error fetching data:', error.error_message
        );
      });






  }, []);
  // Simulated list of brands
  const allBrands = [
    { icon: <ExtensionTwoToneIcon color="primary" />, name: "Game Art" }, { icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "AAA" },
    { icon: <ExtensionTwoToneIcon />, name: "Game development" }, { icon: <ExtensionTwoToneIcon />, name: "3D Modelling" },
    { icon: <ExtensionTwoToneIcon />, name: "3D Animations" }, { icon: <ExtensionTwoToneIcon />, name: "Mobile Games" },
    { icon: <ExtensionTwoToneIcon />, name: "Game Props" }, { icon: <ExtensionTwoToneIcon />, name: "Multiplayer Games" },
    { icon: <ExtensionTwoToneIcon />, name: "Game Shaders" }, { icon: <ExtensionTwoToneIcon />, name: "Teaser Trailer" }
  ];

  const allBrands2 = [
    { icon: <ExtensionTwoToneIcon color="primary" />, name: "Unity" }, { icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "Blender3D" },
    { icon: <ExtensionTwoToneIcon />, name: "MAYA" }, { icon: <ExtensionTwoToneIcon />, name: "3D Max" },
    { icon: <ExtensionTwoToneIcon />, name: "Substance Painter" }, { icon: <ExtensionTwoToneIcon />, name: "Mixamo " },
    { icon: <ExtensionTwoToneIcon />, name: "Unreal" },
  ];

  const PrevArrow = (props) => {
    const controlsArray = Array.from({ length: props.slidesToShow }, () =>
      useAnimation()
    );

    const handleClick = () => {
      props.onClick();
      animateProducts();
    };

    const animateProducts = () => {
      controlsArray.forEach(async (controls, index) => {
        await controls.start({ scale: 0.9 }); // Scale down
        await controls.start({ scale: 1 });   // Scale back up
      });
    };

    return (
      <div className={styles.buttoncontainerleft}>
        <Button
          className={styles.prev}
          onClick={handleClick}
          disabled={props.currentSlide === 0}
        >
          <motion.span

            whileHover={{ scale: [1, 0.6, 1], transition: { duration: 1 }, }} // Scale sequence: 1 -> 0.6 -> 1
            whileTap={{ scale: 0.9 }}   // Scale down while clicked
            onHoverEnd={(event) => {
              event.target.style.scale = 1; // Reset scale to 1 on hover end
            }}
          >
            <ArrowBackIcon />
          </motion.span>
        </Button>
      </div>

    );
  };

  const NextArrow = (props) => (
    <div className={styles.buttoncontainerright}>
      <Button className={styles.next} onClick={props.onClick}
        disabled={props.currentSlide === props.slideCount - props.slidesToShow}
      >
        <motion.span
          whileHover={{ scale: [1, 0.6, 1], transition: { duration: 1 }, }} // Scale sequence: 1 -> 0.6 -> 1
          whileTap={{ scale: 0.9 }}   // Scale down while clicked
          onHoverEnd={(event) => {
            event.target.style.scale = 1; // Reset scale to 1 on hover end
          }}

        >
          <ArrowForwardIcon />
        </motion.span>


      </Button>
    </div>
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
        {data ?
          data.map((product, index) => (

            <Grid key={index} item lg={4} md={6} sm={11} >
              <Box className={`m4 ${styles.testimonial}`}>
                <ModeCommentIcon className={` ${index === currentIndex ? 'red' : 'maincolor'}`} />
                <Typography className={styles.message}>{product.description}</Typography>

                <div className={styles.bottomsection}>
                  <h3>{product.client_name}...</h3>
                  <p>{product.designation}...</p>
                  <p>{product.company}...</p>

                  
                </div>

              </Box>
            </Grid>
          )) :
          <p>There are not Top assets at this while.</p>
        }
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
