import ColorInput from "./ColorInput";
import "./color.css";
import { useState } from "react";
export default function ColorContainer() {
  const [newColor, generateColor] = useState([]);
  const generatedColor = { backgroundColor: newColor };
  return (
    <div className="parentContainer">
      <div className="colorDiv" style={generatedColor}></div>
      <ColorInput newColor={newColor} generateColor={generateColor} />
    </div>
  );
}
