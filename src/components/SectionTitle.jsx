function SectionTitle({ subtitle, title }) {
  return (
    <div className="mb-20 text-center">
      <p className="uppercase tracking-[5px] text-orange-500">{subtitle}</p>

      <h2 className="mt-4 text-5xl font-bold text-white">{title}</h2>
    </div>
  );
}

export default SectionTitle;
