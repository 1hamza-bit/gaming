import React, { useRef, useState } from 'react';
import { Grid, Button } from '@mui/material';
import Image from 'next/image';
import robot from "../../assets/hero.png"
import styles from "./index.module.scss"
import Draggable from 'react-draggable';
import { Slide,Fade } from 'react-reveal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <Fade>
        <h1>Our <span>TOP </span>packs</h1>
        </Fade>
      <div
        ref={sliderRef}
        style={{ display: 'flex', overflowX: 'hidden', scrollBehavior: 'smooth', width: '100%', whiteSpace: 'nowrap', scrollbarWidth: 'none', /* Hide scrollbar for Firefox */
        msOverflowStyle: 'none', transition: isDragging ? 'none' : 'transform 0.9s ease-out', }}
        className={styles.topp}
      >
        <Slide right >
        {products.map((product) => (
          <div key={product.id} style={{ flex: '0 0 25%', padding: '8px', transition: "transform 0.3s ease-in-out"  }}>
            
            <div className="product-item">
              <p>{product.name}</p>
              <Image
                    src={robot}
                    // className={styles.imageContainer}
                    width={300}
                    />

            </div>
            </div>

            
        
        ))}
        </Slide>
      </div>
      <Button className={styles.prev} onClick={handlePrevClick} disabled={sliderRef.current?.scrollLeft === 0}>
        <ArrowBackIcon />
      </Button>
      <Button
        onClick={handleNextClick} className={styles.next}
        disabled={sliderRef.current?.scrollLeft >= sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth}
      >
        <ArrowForwardIcon />
      </Button>
      {/* </Draggable> */}
    </div>
  );
};

export default TopAssets;
