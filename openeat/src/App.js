import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Restaurant from "./Components/Restaurant";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Map from "./Components/Map";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Restaurant />
      <Work />
      <Testimonial />
      <Contact />
      <Map /> {/* Include the Map component */}
      <Footer />
    </div>
  );
}

export default App;
