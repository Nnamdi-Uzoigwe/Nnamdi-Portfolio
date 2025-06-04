export default function Footer() {
    return (
        <div className="py-6 px-8 lg:px-40 bg-gray-100 dark:bg-[#111827]">
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
                <p className="font-semibold text-teal-500 text-lg">Nnamdi Uzoigwe</p>
                
                <div className="flex font-semibold gap-3 text-gray-500">
                    <a href="#" className="hover:text-teal-500">Home</a>
                    <a href="#about" className="hover:text-teal-500">About</a>
                    <a href="#contact" className="hover:text-teal-500">Contact</a>
                    <a href="#skills" className="hover:text-teal-500">Skills</a>
                    <a href="#portfolio" className="hover:text-teal-500">Portfolio</a>
                </div>

                <p className="dark:text-gray-200">Copyright &copy; 2025</p>
            </div>
        </div>
    )
}