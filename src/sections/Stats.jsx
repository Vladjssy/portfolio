import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";

const stats = [
  {
    end: 25,
    suffix: "+",
    title: "Years Experience",
  },
  {
    end: 50,
    suffix: "K+",
    title: "Happy Guests",
  },
  {
    end: 120,
    suffix: "+",
    title: "Signature Dishes",
  },
  {
    end: 4.9,
    decimals: 1,
    suffix: "★",
    title: "Average Rating",
  },
];

function Stats() {
  return (
    <section className="bg-[#171717] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-y border-white/10 py-12 lg:py-14">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`flex flex-col items-center justify-center transition duration-300 hover:scale-105 ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <h2 className="text-4xl font-black text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.25)] sm:text-5xl lg:text-6xl">
                  <AnimatedCounter
                    end={item.end}
                    suffix={item.suffix}
                    decimals={item.decimals || 0}
                  />
                </h2>

                <p className="mt-3 px-2 text-center text-sm tracking-wide text-gray-400 sm:text-base">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
