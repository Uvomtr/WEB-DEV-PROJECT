import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import BookingForm from "./Components/BookingForm";
import Footer from "./Components/Footer";
import Map from "./Components/Map"; // Import the Map component

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Map /> {/* Include the Map component */}
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
