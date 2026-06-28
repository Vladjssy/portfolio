import heroImage from "../assets/images/hero.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.img
        src={heroImage}
        alt="Restaurant"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="absolute inset-0 bg-black/65"
      />

      <div className="relative z-10 text-center px-6">
        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 uppercase tracking-[10px] text-orange-400"
        >
          Welcome to Bella Italia
        </motion.p>

        {/* Taste */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-7xl md:text-8xl font-black text-white"
        >
          Taste
        </motion.h1>

        {/* Real Italy */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white leading-tight"
        >
          The Real Italy
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-xl text-gray-200 leading-8"
        >
          Fresh handmade pasta, authentic pizza, premium wine and unforgettable
          evenings.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-12 rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white shadow-2xl"
        >
          Reserve a Table
        </motion.button>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            delay: 3,
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-16 text-3xl text-white"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
