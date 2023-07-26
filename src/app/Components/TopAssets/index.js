import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    image: '/product2.jpg',
  },
  // Add more product objects here
];

const TopAssets = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>&#8592; Previous</button>
      <button onClick={handleNext}>Next &#8594;</button>
    </div>
  );
};

export default TopAssets;

