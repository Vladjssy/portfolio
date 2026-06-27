function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-bold text-orange-500">Bella Italia</h1>

        <nav>
          <ul className="flex gap-8 text-white font-medium">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">Gallery</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
