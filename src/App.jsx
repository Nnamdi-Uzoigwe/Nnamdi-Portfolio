import './App.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
function App() {
  
// const [darkMode, setDarkMode] = useState(() => {
//     // Load from localStorage if previously set
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);
//   const toggleTheme = () => setDarkMode(prev => !prev);

 const [darkMode, setDarkMode] = useState(false); // Default to light mode

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
  document.documentElement.classList.remove('dark'); // Force light mode
  setDarkMode(false);
}, []);

  // Apply class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className='bg-white dark:bg-[#030712]'>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
