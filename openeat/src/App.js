import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Work from "./Components/Work";

import Map from "./Components/Map"; // Import the Map component

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
