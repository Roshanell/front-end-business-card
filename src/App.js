import logo from "./logo.svg";
import "./App.css";
import PhotoArea from "./PhotoArea";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function App() {
  return (
    <div className="card">
      <PhotoArea />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
