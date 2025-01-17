import { useEffect, useState } from "preact/hooks";

export default function CursorGlow() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update cursor position on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      console.log("Mouse moved to:", e.clientX, e.clientY); // Debugging
    };

    globalThis.addEventListener("mousemove", handleMouseMove);

    return () => globalThis.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      class="pointer-events-none fixed top-0 left-0 w-screen h-screen"
      style={{
        background:
          `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0, 150, 255, 0.6), transparent 100%)`,
        zIndex: 5, // Ensure it's above other elements
        transition: "background 0.05s ease",
      }}
    />
  );
}
