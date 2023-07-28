import { useState } from 'react';
import styles from "./index.module.scss"
import TopAsset from './scroll';

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
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    image: '/product3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    image: '/product4.jpg',
  },
  // Add more product objects here
];

const TopAssets = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (products.length - 3));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (products.length - 3)) % (products.length - 3));
  };

  return (
    <>
    <TopAsset />
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`${styles.carouselSlide} ${index === activeIndex ? styles.active : ''}`}
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
    </>
  );
};

export default TopAssets;

