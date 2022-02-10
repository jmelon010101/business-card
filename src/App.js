import About from "./components/about/About.js";
import Footer from "./components/footer/Footer.js";
import Info from "./components/info/Info.js";
import Interests from "./components/interests/Interests.js";
import './App.css';

function App() {
  return (
    <div className="business-card-container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
