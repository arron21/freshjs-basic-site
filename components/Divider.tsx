// components/Divider.tsx
import { h } from "preact";

export default function Divider() {
  return (
    <div
      className="divider"
      style={{
        width: "100%",
        height: "80px",
        top: "0",
        transform: "translateY(-80px)",
        backgroundImage:
          "linear-gradient(1.5deg, #fff 44.9%, #fff 45%, transparent 45.9%)",
      }}
    ></div>
  );
}
