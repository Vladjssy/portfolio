import { motion } from "framer-motion";

const navItems = ["Home", "About", "Menu", "Gallery", "Contact"];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto mt-6 px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/25 backdrop-blur-md px-8 py-4 shadow-2xl">
          <h1 className="text-3xl font-black text-white">
            Bella<span className="text-orange-500">Italia</span>
          </h1>

          <nav>
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="group relative cursor-pointer text-white transition-colors duration-300 hover:text-orange-400"
                >
                  {item}

                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600">
            Book Now
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
