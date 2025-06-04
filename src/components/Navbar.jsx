import { SunMoon, ToggleLeft } from "lucide-react";
import { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false)
  }
  return (
    <nav className="fixed top-[30px] lg:top-[35px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] bg-white/10 border-[1px] border-gray-300 backdrop-blur-sm rounded-[16px] shadow-MD z-50">
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
          <SunMoon className="cursor-pointer" />
        </div>

        <div className="block lg:hidden">
          <HiOutlineMenuAlt3
            onClick={handleOpen}
            className="cursor-pointer text-[30px]"
          />
        </div>

        {isOpen && (
          <div className="absolute flex justify-between lg:hidden bg-white backdrop-blur-sm top-[0px] right-0 h-auto w-[60%] rounded-md py-6 px-4 z-50 border-2 border-gray-300">
            <div>

            <div className="flex flex-col w-full mt-6">
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
            <div className="flex gap-2 w-full justify-between items-center">
              <p>Switch Theme</p>
              <SunMoon className="cursor-pointer" />
            </div>
            </div>

            <div className="z-100">
              <MdClose className="text-3xl" onClick={handleClose} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
