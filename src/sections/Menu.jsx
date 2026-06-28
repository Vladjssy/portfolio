import { motion } from "framer-motion";

import MenuCard from "../components/MenuCard";

import pizzaImage from "../assets/images/pizza.jpg";
import pastaImage from "../assets/images/pasta.jpg";
import steakImage from "../assets/images/steak.jpg";
import dessertImage from "../assets/images/dessert.jpg";
import SectionTitle from "../components/SectionTitle";
const menuItems = [
  {
    image: pizzaImage,
    title: "Margherita",
    description:
      "Fresh tomatoes, mozzarella, basil and extra virgin olive oil.",
    price: "$18",
    featured: true,
  },

  {
    image: pastaImage,
    title: "Carbonara",
    description: "Creamy Italian pasta with pancetta and parmesan cheese.",
    price: "$22",
  },

  {
    image: steakImage,
    title: "Ribeye Steak",
    description: "Premium grilled steak served with roasted vegetables.",
    price: "$36",
  },

  {
    image: dessertImage,
    title: "Tiramisu",
    description: "Classic Italian dessert with mascarpone and espresso.",
    price: "$12",
    imagePosition: "top",
  },
];

function Menu() {
  return (
    <section id="menu" className="...">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle subtitle="Our Menu" title="Popular Dishes" />
        </motion.div>

        <div className="grid grid-cols-2 gap-10">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              featured={item.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
