import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import Navbar from "../islands/NavBar.tsx";

export default function App({ Component }: PageProps) {

  const LINKS = [
    {
      label: 'one',
      href: 'home',
    }
  ]
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>harold-fresh</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
      <Navbar
      sticky={true}
      transparent={true}
        links={[
          { text: "Home", href: "/" },
          { text: "About", href: "/about" },
          { text: "Gallery", href: "/gallery" },
          { text: "Contact", href: "/contact" },
        ]}
      />
        <Component />
        <Footer links={LINKS} />
      </body>
    </html>
  );
}
