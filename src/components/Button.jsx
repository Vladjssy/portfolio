function Button({ children, className = "" }) {
  return (
    <button
      className={`
        rounded-full
        bg-orange-500
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        shadow-orange-500/20
        transition-all
        duration-300
        hover:scale-105
        hover:bg-orange-600
        hover:shadow-orange-500/40
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
