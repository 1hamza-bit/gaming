import styles from './index.module.css';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import { Typography } from '@mui/material';

const Brands = () => {
  // Simulated list of brands
  const allBrands = [
   {icon: <ExtensionTwoToneIcon color="primary" />, name:  "Game Art"}, {icon: <SportsEsportsTwoToneIcon color="secondary" />, name: "AAA"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game development"}, {icon: <ExtensionTwoToneIcon />, name: "3D Modelling"},
   {icon: <ExtensionTwoToneIcon />, name: "3D Animations"}, {icon: <ExtensionTwoToneIcon />, name: "Mobile Games"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game Props"}, {icon: <ExtensionTwoToneIcon />, name: "Multiplayer Games"}, 
   {icon: <ExtensionTwoToneIcon />, name: "Game Shaders"}, {icon: <ExtensionTwoToneIcon />, name: "Teaser Trailer"}
  ];

  const extendedBrands = [...allBrands, ...allBrands, ...allBrands]; // Duplicating the brands

  return (
    <div className={styles.container}>
      <h1>The <b>services</b> we are amazing with</h1>
      <div className={styles.brands}>
        {extendedBrands.map((brand, index) => (
          <div className={styles.brandItem} key={index}>{brand.icon} &nbsp;  {brand.name}</div>
        ))}
      </div>
      <h1>Testimonials</h1>

          <Box>

            <Typography>The quality, consistency and affordability of Synty assets make them an incredible resource for students and independent developers.</Typography>

          </Box>

       

    </div>
  );
};

export default Brands;
