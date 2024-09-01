import React from 'react';
import { motion } from 'framer-motion';
import Confetti from './components/Confetti';
import SketchWrapper from './components/SketchWrapper';
import { FaBirthdayCake, FaHeart } from 'react-icons/fa';

function App() {
  return (
    <div className="relative">
      <section className="h-screen relative">
        <SketchWrapper text="Chúc mừng sinh nhật Cô Thạnh!" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-4 w-full text-center text-white text-lg"
        >
          Cuộn xuống để xem thêm
        </motion.div>
      </section>

      <section className="h-screen relative">
        <Confetti />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white p-8 rounded-lg shadow-lg bg-accent bg-opacity-80 z-10"
          >
            <motion.h1
              className="text-4xl font-bold mb-4"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Chúc mừng sinh nhật Cô <FaBirthdayCake className="inline-block ml-2" />
            </motion.h1>
            <p className="text-xl mb-6">Cô ơi, con xin chúc cô sinh nhật thật vui vẻ!</p>
            <p className="text-xl mb-6"> Con mãi biết ơn cô vì những bài giảng và sự quan tâm của cô</p>
            <p className="text-xl mb-6"> Con mong cô luôn mạnh khỏe , hạnh phúc và thành công trong sự nghiệp trồng người</p>

          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
