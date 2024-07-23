import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import "./App.css";
import PlayingBody from "./subpages/PlayingBody";
import InterPlay from "./subpages/InterPlay";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="main-content">
            <div className="sidebar">
              <Header />
            </div>
            <main className="content">
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/Cv" element={<Cv />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Press" element={<Press />} />
                <Route path="/About" element={<About />} />
                <Route path="/PlayingBody" element={<PlayingBody />} />
                <Route path="/inter-play" element={<InterPlay />} />
                {/* <Route path="hammer" element={<Hammer />} />
                <Route path="inter-play" element={<InterPlay />} />
                <Route
                  path="/sky-blue-pink-grey"
                  element={<SkyBluePinkGrey />}
                />
                <Route
                  path="/divining-inflexions"
                  element={<DiviningInflexions />}
                /> */}
              </Routes>
            </main>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
