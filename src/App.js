
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
      <NavBar />
      <Home/>
      {/* <About/>
      <Skills/>
      <Experience/>
      <Contact/> */}
    </div>
  );
}

export default App;
