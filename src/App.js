import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyecto from "./components/Proyecto";
import Skills from "./components/Skills";
import Social from "./components/Social";
function App() {
  return (
    <div>
      <Social/>
      <Navbar/>
      <Home/>
      <About/>
      <Proyecto/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
