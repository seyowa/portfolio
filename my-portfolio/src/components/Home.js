import React from 'react';
import { Link } from 'react-router-dom';
import content from '../content.json';
import { motion } from 'framer-motion';

const Home = () => {
  let userName = 'Seye';
  let userKeywords = ['developer'];

  try {
    userName = content?.user?.name || 'Seye';
    userKeywords = content?.keywords || ['developer'];
  } catch (error) {
    console.error('Error loading contents:', error);
  }
  return (
    <motion.section
      className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-500 to-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1
          className="mb-4 text-5xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm {userName}
        </motion.h1>
        <motion.p
          className="mb-8 text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A passionate <span className="capitalize">{userKeywords[1]}</span>
          <br />
          <span className="mt-2 block italic">
            Eager to bring ideas to life
            <br />
            Let's create something amazing!
          </span>
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/projects"
            className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-700"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
