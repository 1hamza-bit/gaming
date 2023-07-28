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

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const GridContainer = styled.div`
  display: flex;
  /* Add your grid styling here */
`;

const ProductItem = styled.div`
  animation: ${(props) => (props.slide ? slideFromRight : 'none')} 0.5s;
`;
const TopAssets = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);

  const handleNextClick = () => {
    // Calculate the index for the next set of products
    const nextIndex = startIndex + 1;

    // Ensure the next index is within bounds
    if (nextIndex <= products.length - 4) {
      setStartIndex(nextIndex);
      setSlideDirection('right');
      setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after 500ms
    }
  };

  const handlePrevClick = () => {
    // Calculate the index for the previous set of products
    const prevIndex = startIndex - 1;

    // Ensure the previous index is within bounds
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
      setSlideDirection('left');
      setTimeout(() => setSlideDirection(null), 500); // Reset slide direction after 500ms
    }
  };
 
  return (
    <div>
      <GridContainer slideDirection={slideDirection}>

      <Grid container spacing={1} className={styles.topp}>
        {products.slice(startIndex, startIndex + 4).map((product,index) => (
          <Grid lg={3} md={4} sm={1} className="product-item">
             <ProductItem key={product.id} slide={index === 3 && startIndex > 0}>
            <p>{product.name}</p>
          </ProductItem>
          </Grid>
        ))}
      </Grid>
      </GridContainer>
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
