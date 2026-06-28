import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

import interiorImage from "../assets/images/interior.jpg";
import chefImage from "../assets/images/chef.jpg";
import wineImage from "../assets/images/wine.jpg";
import dinnerImage from "../assets/images/dinner.jpg";

const images = [
  {
    image: interiorImage,
    title: "Elegant Interior",
  },
  {
    image: chefImage,
    title: "Our Chef",
  },
  {
    image: wineImage,
    title: "Italian Wine",
  },
  {
    image: dinnerImage,
    title: "Dinner Experience",
  },
];

function Gallery() {
  const desktopClasses = [
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
  ];

  return (
    <section id="gallery" className="bg-[#171717] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle subtitle="Gallery" title="Moments From Bella Italia" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:h-[700px] lg:grid-cols-4 lg:grid-rows-2">
          {images.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`group relative overflow-hidden rounded-3xl ${desktopClasses[index]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 lg:h-full"
              />

              <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/50"></div>

              <div className="absolute bottom-6 left-6 translate-y-8 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm uppercase tracking-[4px] text-orange-400">
                  Bella Italia
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
