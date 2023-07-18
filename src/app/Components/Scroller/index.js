import styles from './index.module.css';

const Brands = () => {
  // Simulated list of brands
  const allBrands = [
    'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5', 'Brand 6', 'Brand 7', 'Brand 8', 'Brand 9', 'Brand 10',
    'Brand 11', 'Brand 12', 'Brand 13', 'Brand 14', 'Brand 15', 'Brand 16', 'Brand 17', 'Brand 18', 'Brand 19', 'Brand 20'
  ];

  const extendedBrands = [...allBrands, ...allBrands, ...allBrands]; // Duplicating the brands

  return (
    <div className={styles.container}>
      <div className={styles.brands}>
        {extendedBrands.map((brand, index) => (
          <div className={styles.brandItem} key={index}>{brand}</div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
