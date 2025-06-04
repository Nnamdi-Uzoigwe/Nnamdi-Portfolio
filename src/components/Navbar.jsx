import { Moon, SunMedium, SunMoon, ToggleLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  
  //   useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme');
  //   if (storedTheme === 'dark') setDarkMode(true);
  // }, []);
  
  //  useEffect(() => {
  //     if (darkMode) {
  //       document.documentElement.classList.add('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   }, [darkMode]);


  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <nav className="fixed top-[30px] lg:top-[35px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] bg-white/10 dark:bg-[#030712] dark:text-white border-[1px] border-gray-300 dark:border-gray-600 backdrop-blur-sm rounded-[16px] shadow-MD z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center relative">
        <h1 className="text-xl font-bold text-teal-500">Nnamdi Uzoigwe</h1>

        <div className=" gap-4 hidden lg:flex">
          <a href="#about" className="hover:text-teal-400">
            About Me
          </a>

          <a href="#skills" className="hover:text-teal-400">
            My Skills
          </a>

          <a href="#portfolio" className="hover:text-teal-400">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-teal-400">
            Contact Me
          </a>
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          {/* <SunMoon className="cursor-pointer" onClick={() => setDarkMode(!darkMode)} /> */}
          {darkMode ? <Moon className="cursor-pointer" onClick={toggleDarkMode} /> 
          : <SunMedium className="cursor-pointer" onClick={toggleDarkMode} />}
        </div>

        <div className="block lg:hidden">
          <HiOutlineMenuAlt3
            onClick={handleOpen}
            className="cursor-pointer text-[30px]"
          />
        </div>

        {isOpen && (
          <div className="absolute top-0 right-0 z-50 h-auto w-[60%] lg:hidden bg-white dark:bg-black dark:text-white border-2 border-gray-300 rounded-md py-6  backdrop-blur-sm flex flex-col justify-between">
            <div className="flex flex-col mt-5 space-y-3 px-4">
              <a
                href="#about"
                onClick={handleClose}
                className="hover:text-teal-400"
              >
                About Me
              </a>
              <a
                href="#skills"
                onClick={handleClose}
                className="hover:text-teal-400"
              >
                My Skills
              </a>
              <a
                href="#portfolio"
                onClick={handleClose}
                className="hover:text-teal-400"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={handleClose}
                className="hover:text-teal-400"
              >
                Contact Me
              </a>
            </div>

            <div className="w-full mt-6 px-4 border-t border-gray-300 pt-4 flex items-center justify-between">
              <p>Switch Theme</p>
              {darkMode ? <Moon className="cursor-pointer" onClick={toggleDarkMode} /> : <SunMedium className="cursor-pointer" onClick={toggleDarkMode} />}
            </div>

            <MdClose
              className="absolute top-5 right-4 text-3xl cursor-pointer"
              onClick={handleClose}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
