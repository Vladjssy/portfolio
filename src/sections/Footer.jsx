import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d0d] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-16 px-8">
        {/* Logo */}

        <div>
          <h2 className="text-4xl font-bold text-white">
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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Hours */}

        <div>
          <h3 className="mb-6 text-xl font-bold text-white">Opening Hours</h3>

          <div className="space-y-4 text-gray-400">
            <p>Mon - Fri: 12:00 - 22:00</p>
            <p>Saturday: 12:00 - 23:00</p>
            <p>Sunday: 13:00 - 21:00</p>
          </div>
        </div>

        {/* Social */}

        <div>
          <h3 className="mb-6 text-xl font-bold text-white">Follow Us</h3>

          <div className="flex gap-4">
            <button className="rounded-full border border-white/10 p-4 transition hover:border-orange-500 hover:bg-orange-500">
              <FaInstagram />
            </button>

            <button className="rounded-full border border-white/10 p-4 transition hover:border-orange-500 hover:bg-orange-500">
              <FaFacebookF />
            </button>

            <button className="rounded-full border border-white/10 p-4 transition hover:border-orange-500 hover:bg-orange-500">
              <FaTripadvisor />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 text-center text-gray-500">
        © 2026 BellaItalia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
