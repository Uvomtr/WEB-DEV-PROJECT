import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Restaurant from "./Components/Restaurant";
import Work from "./Components/Work";
import Review from "./Components/Review";
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
      <Review />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
