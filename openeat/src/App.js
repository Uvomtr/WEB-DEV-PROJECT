import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Menu />
      <Work />
      <Testimonial />
      <Contact />
      <Map /> {/* Include the Map component */}
      <Footer />
    </div>
  );
}

export default App;
