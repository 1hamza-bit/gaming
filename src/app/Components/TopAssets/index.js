import React, { useEffect, useState } from 'react';
import  {useEmblaCarousel}  from 'embla-carousel-react';
import styles from './index.module.scss'; // Import CSS module for styling

const TopAssets = ({ items }) => {
  const [viewportRef, embla] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    if (embla) {
      debugger
      embla.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (embla) {
      embla.scrollNext();
    }
  };

  useEffect(() => {
    if (embla) {
      embla.on('select', () => {
        setSelectedIndex(embla.selectedScrollSnap());
      });
    }
  }, [embla]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.cardsContainer} ref={viewportRef}>
        <div className={styles.cardsInnerContainer}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              {/* Add your card content here */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={scrollPrev}>&lt;</button>
        <button onClick={scrollNext}>&gt;</button>
      </div>
    </div>
  );
};

export default TopAssets;
