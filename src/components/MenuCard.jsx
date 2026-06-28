import Button from "./Button";

function MenuCard({ image, title, description, price, featured = false }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-[#1a1a1a]
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-orange-500/20
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="h-8 mb-4">
          {featured && (
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Chef's Choice
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          <span className="text-xl font-bold text-orange-500">{price}</span>
        </div>

        <div className="mt-3 text-orange-400">★★★★★</div>

        <p className="mt-4 leading-7 text-gray-400">{description}</p>

        <div className="mt-6">
          <Button className="w-full">Order Now</Button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
