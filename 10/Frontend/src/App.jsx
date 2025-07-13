import { useState } from "react";

// src/App.jsx
export default function App() {
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("Click Me");

  const handleClick = async () => {
  // Make POST request to /change
  await fetch("http://localhost:3000/change", {
    method: "POST",        // ✅ Important!
  });

  // Then fetch updated data
  const res = await fetch("http://localhost:3000/event"); // GET is fine here
  const data = await res.json();

  console.log("Received from backend:", data); // ✅ for testing
  setText(data.text);
  setColor(data.color);
};


  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        {text}
      </button>
    </>
  );
}
