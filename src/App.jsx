import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-6 py-6 lg:px-10 lg:py-0 dark:bg-gray-900">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
