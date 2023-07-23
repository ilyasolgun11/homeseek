import "./Home.css";

import HeroSection from "../HeroSection/HeroSection";
import Featured from "../Featured/Featured";
import Properties from "../../Properties/Properties";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Maps from "../Maps/Maps";

const Home = () => {
  return (
    <div>
      <main>
        <HeroSection />
      </main>
      <section>
        <Featured />
      </section>
      <section>
        <Properties />
      </section>
      <section style={{ marginTop: "100px" }}>
        <Contact />
      </section>
      <section className="container">
        <Maps />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
