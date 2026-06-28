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
    <section className="bg-[#0f0f0f] py-24">
      <div className="mx-auto flex max-w-7xl items-center gap-20 px-8">
        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={restaurantImage}
            alt="Restaurant"
            className="duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-14 bg-orange-500"></div>

            <span className="uppercase tracking-[5px] text-sm font-semibold text-orange-500">
              Since 1999
            </span>
          </div>

          <h2 className="text-5xl font-bold leading-tight text-white">
            Authentic Italian Experience
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            At Bella Italia we combine traditional recipes with modern elegance.
            Every dish is prepared using fresh ingredients imported from Italy
            and served in a warm atmosphere where every guest feels at home.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 text-lg text-white"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold">
                  ✓
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button>Learn More</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
