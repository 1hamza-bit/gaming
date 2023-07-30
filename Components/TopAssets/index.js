import React, { useRef } from 'react';
import { Grid, Button } from '@mui/material';

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

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  const handlePrevClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Grid container ref={sliderRef}>
        {products.map((product) => (
          <Grid key={product.id} item xs={3} style={{ flex: '0 0 25%' }}>
            <div className="product-item">
              <p>{product.name}</p>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button onClick={handlePrevClick} disabled={sliderRef.current?.scrollLeft === 0}>
        Previous
      </Button>
      <Button
        onClick={handleNextClick}
        disabled={sliderRef.current?.scrollLeft >= sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth}
      >
        Next
      </Button>
    </div>
  );
};

export default TopAssets;
