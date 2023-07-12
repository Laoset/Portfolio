import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyecto from "./components/Proyecto";
import Social from "./components/Social";
import Footer from "./components/Footer";
function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <main>
      <Social />
      <Navbar isEnglish={isEnglish} onLanguageToggle={handleLanguageToggle} />
      <Home isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <Proyecto isEnglish={isEnglish} />
      <Footer isEnglish={isEnglish} />
    </main>
  );
}

export default App;
