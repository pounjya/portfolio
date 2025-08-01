import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0f111d] to-[#07080d] text-white font-sans flex flex-col items-center justify-center">

{/* Circles */}
<div className="absolute w-[300px] h-[300px] bg-cyan-400 opacity-30 blur-[100px] rounded-full top-[10%] left-[5%] z-0" />
<div className="absolute w-[250px] h-[250px] bg-blue-500 opacity-30 blur-[100px] rounded-full bottom-[10%] right-[5%] z-0" />
<div className="absolute w-[200px] h-[200px] bg-cyan-400 opacity-30 blur-[100px] rounded-full top-[55%] left-[40%] z-0" />

{/* Main Content */}
<div className="relative z-10 text-center px-2 md:px-4">
  <motion.p
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-lg text-gray-400"
  >
    درود دوست من، به صفحه پورتفولیوی بنده خوش اومدی
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="text-4xl md:text-5xl font-bold text-cyan-400 mt-4"
  >
    پویا نجاتی زادگان
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="text-xl text-gray-300 mt-2"
  >
    Front-end Developer
  </motion.p>
</div>
</div>
    </>
  );
};

export default Home;