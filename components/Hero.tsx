// components/Hero.tsx
import { h } from "preact";

interface HeroProps {
  image: string;
  heroText: string;
  heroTextSecondary?: string;
  links?: { text: string; href: string }[];
  video?: string;
}

export default function Hero({
  image,
  heroText,
  heroTextSecondary,
  links,
  video,
}: HeroProps) {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={image}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Optional Video */}
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">{heroText}</h1>
        {heroTextSecondary && (
          <p className="mt-2 text-lg sm:text-xl">{heroTextSecondary}</p>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="mt-4 space-x-4">
            {links.map((link) => (
              <a
                href={link.href}
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
