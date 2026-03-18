// import { div, ul } from "motion/react-client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Cheat Chanlyhour
        </a>

        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">About</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#experience">Experience</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#skill">Skill</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#projects">Projects</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Menu for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu className="text-3xl" />
        </button>
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 right-0 left-0 bg-black/90 border-b border-gray-800 py-16 text-center space-y-5">
            <li className="group px-10 opacity-80 hover:backdrop-opacity-100 transition-opacity">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">About</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:backdrop-opacity-100 transition-opacity">
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">My Experience</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:backdrop-opacity-100 transition-opacity">
              <a href="#skill" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">My Skills</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:backdrop-opacity-100 transition-opacity">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Projects</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:backdrop-opacity-100 transition-opacity">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Contact</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
