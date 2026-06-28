import heroImage from "../assets/images/hero.jpg";
import { motion } from "framer-motion";
import Button from "../components/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
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

      <div className="relative z-10 px-6 text-center">
        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 uppercase tracking-[10px] text-orange-400"
        >
          Welcome to Bella Italia
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-7xl font-black text-white md:text-8xl"
        >
          Taste
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-6xl font-black leading-tight text-white md:text-8xl"
        >
          The Real Italy
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-200"
        >
          Fresh handmade pasta, authentic pizza, premium wine and unforgettable
          evenings.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          className="mt-12"
        >
          <a href="#reservation">
            <Button className="px-10 py-4 text-lg">Reserve a Table</Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
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
