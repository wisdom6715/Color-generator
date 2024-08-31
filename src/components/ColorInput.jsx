import { useState } from "react";
import "./color.css";

export default function ColorInput({ newColor, generateColor }) {
  const [color, colorSet] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    generateColor(color);
    colorSet("");
    console.log(color);
  }
  return (
    <form onSubmit={handleSubmit} className="color-form">
      <div>{newColor}</div>
      <div>
        <input onChange={(e) => colorSet(e.target.value)} value={color} />
      </div>
      <button type="submit">Subimt</button>
    </form>
  );
}
