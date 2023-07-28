import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  // Add more product objects here
];

const TopAssets = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    // Calculate the index for the next set of products
    const nextIndex = startIndex + 1;

    // Ensure the next index is within bounds
    if (nextIndex <= products.length - 4) {
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
      <div className="grid-container">
        {products.slice(startIndex, startIndex + 4).map((product) => (
          <div key={product.id} className="product-item">
            <p>{product.name}</p>
          </div>
        ))}
      </div>
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
