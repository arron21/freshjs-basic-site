import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Hero from "../components/Hero.tsx";
import Divider from "../components/Divider.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
    
    <Hero
    image="/pexels-arron-mccrory-138221-23023469.jpg"
    heroText="Welcome to Fresh.js!"
    heroTextSecondary="Build amazing websites with speed and simplicity."
    links={[
      { text: "Get Started", href: "/get-started" },
      { text: "Learn More", href: "/learn-more" },
    ]}
    video="https://www.example.com/background-video.mp4"
  />
  <Divider />
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>

      </div>
    </div>
    </>
  );
}
