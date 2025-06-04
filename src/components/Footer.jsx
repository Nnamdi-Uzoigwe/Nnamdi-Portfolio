export default function Footer() {
    return (
        <div className="py-6 px-8 lg:px-40 border-t-[1px] border-gray-300 bg-gray-100">
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
                <p className="font-semibold text-teal-500 text-lg">Nnamdi Uzoigwe</p>
                
                <div className="flex gap-3 text-gray-500">
                    <a href="#" className="hover:text-teal-500">Home</a>
                    <a href="#about" className="hover:text-teal-500">About Me</a>
                    <a href="#contact" className="hover:text-teal-500">Contact</a>
                    <a href="#skills" className="hover:text-teal-500">Skills</a>
                    <a href="#portfolio" className="hover:text-teal-500">Portfolio</a>
                </div>

                <p>Copyright &copy; 2025</p>
            </div>
        </div>
    )
}