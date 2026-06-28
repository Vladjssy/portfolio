import { motion } from "framer-motion";

import heroImage from "../assets/images/hero.jpg";
import restaurantImage from "../assets/images/restaurant.jpg";
import pizzaImage from "../assets/images/pizza.jpg";
import pastaImage from "../assets/images/pasta.jpg";

const images = [heroImage, restaurantImage, pizzaImage, pastaImage];

function Gallery() {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[5px] text-orange-500">Gallery</p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Moments From Bella Italia
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="group overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt=""
                className="
                  h-80
                  w-full
                  object-cover
                  duration-700
                  group-hover:scale-110
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
