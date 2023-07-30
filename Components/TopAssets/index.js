import { Grid } from '@mui/material';
import React, { useState } from 'react';
import styles from './index.module.scss'
import styled, { keyframes } from 'styled-components';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  // Add more product objects here
];

const SliderContainer = styled.div`
  width: 100%; /* Set a fixed width for the container */
  overflow: hidden; /* Hide overflow to show only 4 products */
  position: relative;
`;

const GridContainer = styled.div`
  display: flex;
  /* Add your grid styling here */
  transition: transform 0.5s ease;
  transform: translateX(-${(props) => props.startIndex * 25}%); /* Adjust the translation */
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => 100 * (props.totalProducts + 1)}%; /* 1 extra width to accommodate the 5th product */
`;


const TopAssets = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handleNextClick = () => {
    // Calculate the index for the next set of products
    const nextIndex = startIndex + 1;

    // Ensure the next index is within bounds
    if (nextIndex <= products.length - 3) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    // Calculate the index for the previous set of products
    const prevIndex = startIndex - 1;

    // Ensure the previous index is within bounds
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };
 
  return (
    <div>
      <SliderContainer>
      <GridContainer startIndex={startIndex}>

      <Grid container spacing={1} className={styles.topp}>
        {products.map((product,index) => (
          <Grid lg={3} md={4} sm={1} key={product.id} className="product-item">
            <p>{product.name}</p>
         
          </Grid>
        ))}
        
      </Grid>
      </GridContainer>
      </SliderContainer>
      <button onClick={handlePrevClick} disabled={startIndex === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={startIndex >= products.length - 4}>
        Next
      </button>
    </div>
  );
};

export default TopAssets;
