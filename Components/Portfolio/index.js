import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

const projectData = [
  {
    title: 'Project 1',
    category: 'Web Development',
    description: 'Description of project 1.',
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
  },
  // Add more projects here
];

const Projects = () => {
  const gridItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios
      .get('https://kobmob.pythonanywhere.com/api/portfolio')
      .then((response) => {
        // Save the response data in the state
        
        setData(response.data);
        setData1(response.data);


        // Extract unique tags from the response and add them to the tags state
        const uniqueTags = [...new Set(response.data.map((item) => item.tag))];
        setTags(uniqueTags);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTagClick = (selectedTag) => {
    const filteredData = data1.filter((item) => item.tag === selectedTag);
    setData(filteredData);
  };


  return (
    <section id="projects" className={styles.projects}>
     <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.9, delay: 0.9 }}
        > 
      <h1>Our Projects</h1>
      <div className={styles['project-tags']}>
      {tags.map((tag, index) => (
        <Button
          key={index}
          className={styles.tag}
          onClick={() => handleTagClick(tag)}
        >
          <span>{tag}</span>
        </Button>
      ))}
      
      </div>
      <div className={styles['project-cards']}>
        <Grid container spacing={2}>
      
   
        {data.map((project, index) => (
      
          <Grid item lg={4} md={6} sm={11}>
                 <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.9 }}
         >
          <div key={index} className={styles['project-card']}>
            <div className={styles['project-image']}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles['project-details']}>
              <h3>{project.portfolio_title}</h3>
              <p>{project.portfolio_detail}</p>
              <span className={styles['category-tag']}>{project.tag}</span>
            </div>
          </div>
          </motion.div>
          </Grid>
          
        ))}
        
       
        </Grid>
      </div>
    </motion.div>
  </section>
  );
};

export default Projects;
