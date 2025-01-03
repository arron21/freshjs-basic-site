// components/Footer.tsx
import { h } from "preact";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Arron McCrory. All rights reserved.</p>
        <nav className="mt-4">
          <a
            href="https://github.com/arronmccrory"
            target="_blank"
            className="text-blue-400 hover:underline mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arronmccrory"
            target="_blank"
            className="text-blue-400 hover:underline mx-2"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
