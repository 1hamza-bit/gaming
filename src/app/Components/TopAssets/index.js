import React, { useRef } from 'react';
import styles from "./index.module.scss"

const TopAssets = () => {
  const sliderRef = useRef(null);

  const cards = [
    { id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },
    { id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },{ id: 1, title: 'Card 1', image: 'path/to/image1.jpg' },
    { id: 2, title: 'Card 2', image: 'path/to/image2.jpg' },
    { id: 3, title: 'Card 3', image: 'path/to/image3.jpg' },
    // Add more cards as needed
  ];

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    console.log(sliderRef.current.offsetWidth)
  };
  return (
    <div className={styles.cardslidercontainer}>
      <div className={styles.cardslider} ref={sliderRef}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.slidercontrols}>
        <button onClick={handleScrollLeft}>Left</button>
        <div className={styles.sliderthumb} />
        <button onClick={handleScrollRight}>Right</button>
      </div>
    </div>
  );
};

export default TopAssets;
