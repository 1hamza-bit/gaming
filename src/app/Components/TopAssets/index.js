import React, { useRef } from 'react';
import styles from "./index.module.scss"

const TopAssets = () => {
  const sliderRef = useRef(null);

  const cards = [
    { id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },
    // Add more cards as needed
  ];

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
  };

  return (
    <div className={styles.card-slider-container}>
      <div className={styles.card-slider} ref={sliderRef}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.slider-controls}>
        <button onClick={handleScrollLeft}>Left</button>
        <div className={styles.slider-thumb} />
        <button onClick={handleScrollRight}>Right</button>
      </div>
    </div>
  );
};

export default TopAssets;
