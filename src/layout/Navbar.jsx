import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto mt-6 max-w-7xl px-8">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/25 px-8 py-4 shadow-2xl backdrop-blur-md">
          <a href="#home">
            <h1 className="cursor-pointer text-3xl font-black text-white">
              Bella<span className="text-orange-500">Italia</span>
            </h1>
          </a>

          <nav>
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

          <a href="#reservation">
            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
