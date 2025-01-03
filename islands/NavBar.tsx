// components/Navbar.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

interface NavbarProps {
  links: { text: string; href: string }[];
  sticky?: boolean;
}

export default function Navbar({ links, sticky = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-neutral-800 text-white ${
        sticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          MySite
        </a>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
