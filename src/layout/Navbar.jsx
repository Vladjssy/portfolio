import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-3 max-w-7xl px-4 sm:mt-6 sm:px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/25 px-6 py-3 shadow-2xl backdrop-blur-md sm:px-8 sm:py-4">
          <a href="#home">
            <h1 className="text-2xl font-black text-white sm:text-3xl">
              Bella<span className="text-orange-500">Italia</span>
            </h1>
          </a>

          {/* Desktop menu */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group relative text-white transition-colors duration-300 hover:text-orange-400"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop button */}
          <a href="#reservation" className="hidden lg:block">
            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600">
              Book Now
            </button>
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white lg:hidden"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-3 rounded-3xl border border-white/10 bg-[#181818]/95 p-6 backdrop-blur-md lg:hidden"
            >
              <nav>
                <ul className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-lg text-white transition hover:text-orange-400"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <a href="#reservation" onClick={closeMenu}>
                  <button className="mt-6 w-full rounded-full bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
                    Book Now
                  </button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Navbar;
