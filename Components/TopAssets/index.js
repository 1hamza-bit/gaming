import React, { useEffect, useRef, useState } from 'react';
import { Grid, Button } from '@mui/material';
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

  const PrevArrow = (props) => (
    <Button className={styles.prev} onClick={props.onClick} disabled={props.currentSlide === 0}>
      <ArrowBackIcon />
    </Button>
  );

  const NextArrow = (props) => (
    <Button className={styles.next} onClick={props.onClick}
      disabled={props.currentSlide === props.slideCount - props.slidesToShow}
    >
      <ArrowForwardIcon />
    </Button>
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
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
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

      <h1>Our <span>TOP </span>packs</h1>
      <Slider {...settings}>
        {data?.map((product, index) => (
          <>
          <div key={index} className="product-item">
              <Image src={robot} alt={product.name} width={300} />

              <h3>{product.name} jshdjkshjkdhsjkhdjsh</h3>
              <p>{product.description}</p>
            </div>
      

            {/* <div key={index} className="product-item">
              <Image src={robot} alt={product.name} width={200} />

              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div> */}
</>
        ))}


      </Slider>



      {/* </Draggable> */}
    </div>
  );
};

export default TopAssets;
