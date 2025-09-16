import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="max-w-[1200px] w-full m-auto px-4">
            <div className="flex justify-between items-center py-5">
                <a href="#" className="font-bold text-3xl">Rafael</a>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex text-xl gap-6">
                    <a href="#" className="hover:text-purple-600">Home</a>
                    <a href="#skills" className="hover:text-purple-600">Framework and Languages</a>
                    <a href="#resume" className="hover:text-purple-600">Resume</a>
                    <a href="#contact" className="hover:text-purple-600">Contact</a>
                </nav>

                {/* Botão hamburguer (visível apenas em mobile) */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Sidebar Mobile */}
            <div
                className={`
                fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                flex flex-col items-center pt-24 gap-6
                z-50
            `}
            >
                <a href="#" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#skills" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Framework and Languages</a>
                <a href="#resume" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Resume</a>
                <a href="#contact" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

            {/* Overlay escuro ao abrir o menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;
