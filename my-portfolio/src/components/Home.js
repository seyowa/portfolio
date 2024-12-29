import React from 'react';
import { Link } from 'react-router-dom';
import content from '../content.json';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.section
      className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white"

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
          Hi, I'm {content.user?.name || 'Seye'}
        </motion.h1>
        <motion.p
          className="mb-8 text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A passionate <span className="capitalize">{content.keywords[1] || 'Developer'}</span><br />
          <span className="mt-2 block italic">Eager to bring ideas to life<br />
          Let's create something amazing!</span>
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/projects"
            className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;