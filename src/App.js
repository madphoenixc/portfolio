import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import NavBar from './pages/Navbar/Navbar';
import Home from './pages/Home/home';
import Experience from './pages/Experience/experience';
import Skills from './pages/Skills/skills';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={
            <>
              <NavBar/>
              <Home />
            </>
            } />
          <Route path="/about" element={<>
              <NavBar/>
              <About />
            </>} />
          <Route path="/skills" element={<>
              <NavBar/>
              <Skills />
            </>} />
          <Route path="/experience" element={<>
              <NavBar/>
              <Experience />
            </>} />
          <Route path="/Contact" element={<>
              <NavBar/>
              <Contact />
            </>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
