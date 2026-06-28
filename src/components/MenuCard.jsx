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
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-72 lg:h-64"
        />
      </div>

      {/* Content */}

      <div className="p-5 sm:p-6">
        {/* Badge */}

        <div className="mb-4 flex h-8 items-center">
          {featured && (
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Chef's Choice
            </span>
          )}
        </div>

        {/* Title + Price */}

        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>

          <span className="text-lg font-bold text-orange-500 sm:text-xl">
            {price}
          </span>
        </div>

        {/* Rating */}

        <div className="mt-3 text-orange-400">★★★★★</div>

        {/* Description */}

        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>

        {/* Button */}

        <div className="mt-6">
          <Button className="w-full py-3 text-base sm:py-4 sm:text-lg">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
