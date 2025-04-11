"use client";
import { useState } from "react";
import Link from "next/link";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Closes the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900/70 backdrop-blur-md text-white shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Branding / Logo */}
        <div className="text-2xl font-semibold">4Fun Community</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="relative group transition-colors duration-200 hover:text-gray-400"
              >
                Leaderboard
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/players"
                className="relative group transition-colors duration-200 hover:text-gray-400"
              >
                Players
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/records"
                className="relative group transition-colors duration-200 hover:text-gray-400"
              >
                Records
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/servers"
                className="relative group transition-colors duration-200 hover:text-gray-400"
              >
                Servers
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden bg-gray-900/70 overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center space-y-4 px-4 pb-4">
          <li>
            <Link href="/leaderboard" onClick={handleLinkClick}>
              <span className="block relative group transition-colors duration-200 hover:text-gray-400">
                Leaderboard
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/players" onClick={handleLinkClick}>
              <span className="block relative group transition-colors duration-200 hover:text-gray-400">
                Players
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/records" onClick={handleLinkClick}>
              <span className="block relative group transition-colors duration-200 hover:text-gray-400">
                Records
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/servers" onClick={handleLinkClick}>
              <span className="block relative group transition-colors duration-200 hover:text-gray-400">
                Servers
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-200 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
