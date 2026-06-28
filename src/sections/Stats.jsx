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
    <section className="bg-[#171717] py-16">
      <div className="mx-auto max-w-7xl px-8">
        <div className="border-y border-white/10 py-14">
          <div className="grid grid-cols-4">
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
                  index !== stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <h2 className="text-6xl font-black text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,.25)]">
                  <AnimatedCounter
                    end={item.end}
                    suffix={item.suffix}
                    decimals={item.decimals || 0}
                  />
                </h2>

                <p className="mt-3 text-center text-base tracking-wide text-gray-400">
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
