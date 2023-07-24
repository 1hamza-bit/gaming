import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'; // Import CSS module for styling
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const TopAssets = ({ items }) => {
  const [viewportRef, emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    if (emblaRef) {
      debugger
      emblaRef.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaRef) {
      emblaRef.scrollNext();
    }
  };

  useEffect(() => {
    if (emblaRef) {
      emblaRef.on('select', () => {
        setSelectedIndex(emblaRef.selectedScrollSnap());
      });
    }
  }, [emblaRef]);

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
