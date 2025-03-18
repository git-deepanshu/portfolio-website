import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 px-[15%]"
    >
      <h1 className="text-5xl font-bold mb-4 text-white">Deepanshu Gupta</h1>
      <p className="text-2xl text-gray-400">Frontend Engineer</p>
    </motion.header>
  );
}