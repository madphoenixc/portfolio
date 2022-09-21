import React,{lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { LoaderProvider } from "./components/context/LoaderContext";
import Loading from "./components/Loader/Loading";
const NavBar =lazy(()=> import('./pages/Navbar/Navbar'));
const Home = lazy(()=> import('./pages/Home/home'));
const Experience = lazy(()=> import('./pages/Experience/experience'));
const Skills = lazy(()=> import('./pages/Skills/skills'));
const About = lazy(()=> import('./pages/About/about'));
const Contact = lazy(()=> import('./pages/Contact/contact'));
const Error404 = lazy(() => import("./pages/Error404/Error404"));

function App() {
  return (
    <div className="App">
    <Router>
      <LoaderProvider>
        <Suspense fallback={<Loading />}>
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
            <Route path="*" element={<Error404/>} />
          </Routes>
        </Suspense>
      </LoaderProvider>
    </Router>
    </div>
  );
}

export default App;
