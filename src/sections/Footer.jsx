import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d] py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 lg:px-8">
        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Bella<span className="text-orange-500">Italia</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Authentic Italian dining with fresh ingredients, premium wines and
            unforgettable evenings.
          </p>
        </div>

        {/* Links */}

        <div>
          <h3 className="mb-6 text-xl font-bold text-white">Quick Links</h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#home" className="transition hover:text-orange-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="transition hover:text-orange-400">
                About
              </a>
            </li>

            <li>
              <a href="#menu" className="transition hover:text-orange-400">
                Menu
              </a>
            </li>

            <li>
              <a href="#gallery" className="transition hover:text-orange-400">
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#reservation"
                className="transition hover:text-orange-400"
              >
                Reservation
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}

        <div>
          <h3 className="mb-6 text-xl font-bold text-white">Opening Hours</h3>

          <div className="space-y-4 text-gray-400">
            <p>Mon – Fri: 12:00 – 22:00</p>
            <p>Saturday: 12:00 – 23:00</p>
            <p>Sunday: 13:00 – 21:00</p>
          </div>
        </div>

        {/* Social */}

        <div>
          <h3 className="mb-6 text-xl font-bold text-white">Follow Us</h3>

          <div className="flex gap-4">
            <button className="rounded-full border border-white/10 p-4 text-lg text-white transition duration-300 hover:border-orange-500 hover:bg-orange-500">
              <FaInstagram />
            </button>

            <button className="rounded-full border border-white/10 p-4 text-lg text-white transition duration-300 hover:border-orange-500 hover:bg-orange-500">
              <FaFacebookF />
            </button>

            <button className="rounded-full border border-white/10 p-4 text-lg text-white transition duration-300 hover:border-orange-500 hover:bg-orange-500">
              <FaTripadvisor />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-8 px-6 text-center text-sm text-gray-500 sm:text-base">
        © 2026 BellaItalia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
