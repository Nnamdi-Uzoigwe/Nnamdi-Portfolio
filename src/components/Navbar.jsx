import { SunMoon, ToggleLeft } from "lucide-react";
import { FaToggleOff } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="fixed top-[35px] left-1/2 transform -translate-x-1/2 w-[80%] bg-white/10 border-[1px] border-gray-300 backdrop-blur-sm rounded-[16px] shadow-MD z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#10B981]">Nnamdi Uzoigwe</h1>
        
        <div className="flex gap-4">
            <a href="#">About Me</a>

            <a href="#">My Skills</a>

            <a href="#">Portfolio</a>

            <a href="#">Contact Me</a>


        </div>

        <div className="flex gap-2 items-center">
            <SunMoon className="cursor-pointer" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
