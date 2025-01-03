import Gallery from "../../islands/Gallery.tsx";

export default function Page() {
  return (
    <Gallery
      images={[
        {
          src: "/pexels-arron-mccrory-138221-23023469.jpg",
          thumbnail: "/pexels-arron-mccrory-138221-23023469.jpg",
          alt: "Image 1",
          caption: "Beautiful View",
        },
        {
          src: "/pexels-arron-mccrory-138221-23023469.jpg",
          thumbnail: "/pexels-arron-mccrory-138221-23023469.jpg",
          alt: "Image 2",
          caption: "Mountain Scene",
        },
        {
          src: "/pexels-arron-mccrory-138221-23023469.jpg",
          thumbnail: "/pexels-arron-mccrory-138221-23023469.jpg",
          alt: "Image 3",
          caption: "City Lights",
        },
      ]}
    />
  );
}
