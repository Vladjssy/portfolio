import restaurantImage from "../assets/images/restaurant.jpg";
import { motion } from "framer-motion";
import Button from "../components/Button";

const features = [
  "Handmade Pasta Every Day",
  "Wood Fired Pizza",
  "Carefully Selected Italian Wines",
  "Award Winning Chefs",
];

function About() {
  return (
    <section id="about" className="bg-[#111111] py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full overflow-hidden rounded-3xl shadow-2xl lg:w-1/2"
        >
          <img
            src={restaurantImage}
            alt="Restaurant"
            className="w-full rounded-3xl transition duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-14 bg-orange-500"></div>

            <span className="text-sm font-semibold uppercase tracking-[5px] text-orange-500">
              Since 1999
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Authentic Italian Experience
          </h2>

          <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            At Bella Italia we combine traditional recipes with modern elegance.
            Every dish is prepared using fresh ingredients imported from Italy
            and served in a warm atmosphere where every guest feels at home.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 text-base text-white sm:text-lg"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold">
                  ✓
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button className="px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
