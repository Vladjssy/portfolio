import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Stats from "./sections/Stats";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Stats />
      <Reservation />
      <Footer />
    </>
  );
}

export default App;
