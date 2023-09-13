import React, { useEffect, useRef, useState } from 'react';
import { Grid, Button, Stack } from '@mui/material';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import styles from "./index.module.scss"
import Draggable from 'react-draggable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
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

const TopAssets = () => {
  const sliderRef = useRef(null);
  const itemsInView = 4;
  const [isDragging, setIsDragging] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const PrevArrow = (props) => (
    <div className={styles.buttons}>
    <Button className={styles.prev} onClick={props.onClick} disabled={props.currentSlide === 0}>
      <ArrowBackIcon />
    </Button>
    </div>
  );

  const NextArrow = (props) => (
    <div className={styles.buttons}>
    <Button className={styles.next} onClick={props.onClick}
      disabled={props.currentSlide === props.slideCount - props.slidesToShow}
    >
      <ArrowForwardIcon />
    </Button>
    </div>
  );

  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://kobmob.pythonanywhere.com/api/top-packs')
      .then(response => {
        // Save the response data in the state
        setData(response.data);
      })
      .catch(error => {
        alert('Error fetching data:', error.error_message
        );
      });






  }, []);




  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
    speed: 1200,
    customStyle: {
      width: '300px',  // Custom width at this breakpoint
      height: '200px', // Custom height at this breakpoint
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: false, // Disable variable width
        },
        customStyle: {
          width: '300px',  // Custom width at this breakpoint
          height: '200px', // Custom height at this breakpoint
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false, // Disable variable width
        },
        customStyle: {
          width: '150px',  // Custom width at this breakpoint
          height: '100px', // Custom height at this breakpoint
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };




  const handleDrag = (event, ui) => {
    if (!isDragging) {
      setIsDragging(true);
    }
    sliderRef.current.scrollLeft -= ui.deltaX;
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  const handleNextClick = () => {
    const scrollAmount = 100 * itemsInView;
    sliderRef.current.scrollLeft += scrollAmount;
    setAnimate(true)
  };

  const handlePrevClick = () => {
    const scrollAmount = 100 * itemsInView;
    sliderRef.current.scrollLeft -= scrollAmount;
  };

  return (
    <div style={{ overflow: 'hidden' }} className={styles.topp}>

      {/* <Draggable axis="x" onDrag={handleDrag} onStop={handleDragStop}> */}
      <Stack direction="row" className='jcspace df'>
      <h1>Our <span>TOP </span>packs </h1>
      <Button className={styles.buttonassets}>Portfolio <ArrowOutwardIcon /></Button>
         


</Stack>
      

      <Slider  prevArrow={<PrevArrow />} nextArrow={<NextArrow />} {...settings}>
        {data ?  
       
        data.map((product, index) => (
          <>
         
            <div key={index} className={`${styles["product-item"]} ${index === currentIndex ? styles.first : ""}`} b>
              <img src={product.image} alt={product.name} />

              <h3> <span> {product.image_by_title}</span> <ArrowOutwardIcon className={styles.arrow} /></h3>
              <p>{product.description}</p>
            </div>


            {/* <div key={index} className="product-item">
              <Image src={robot} alt={product.name} width={200} />

              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div> */}
          </>
        )):
        <p>There are not Top assets at this while.</p> 
          }
       {/* <div className={styles.buttons}>
        <div><PrevArrow /></div>

        <div><NextArrow /></div>
        
        </div> */}

      </Slider>
     




      {/* </Draggable> */}
    </div>
  );
};

export default TopAssets;
