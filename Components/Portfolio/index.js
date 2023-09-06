import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss'
import { Button, Grid } from '@mui/material';

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
  return (
    <section id="projects" className={styles.projects}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <h1>Projects</h1>
      <div className={styles['project-tags']}>
        <Button className={styles.tag}><span>All</span></Button>
        <Button className={styles.tag}><span>Web Development</span></Button>
        <Button className={styles.tag}><span>UI/UX Design</span></Button>
      </div>
      <div className={styles['project-cards']}>
        <Grid container spacing={2}>
        {projectData.map((project, index) => (
          <Grid item lg={4} md={6} sm={11}>
          <div key={index} className={styles['project-card']}>
            <div className={styles['project-image']}>
              <img src={"https://wallpaperaccess.com/full/381739.jpg"} alt={project.title} />
            </div>
            <div className={styles['project-details']}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={styles['category-tag']}>{project.category}</span>
            </div>
          </div>
          </Grid>
        ))}
        </Grid>
      </div>
    </motion.div>
  </section>
  );
};

export default Projects;
