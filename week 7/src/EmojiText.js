import React, { useState } from "react";
import Love from "./Love.png";
import Sad from "./sad.png";
import Like from "./like.png";

function EmojiText() {
  const [input, setInput] = useState("");
  const [pic, setPic] = useState(null);

  // Function to handle input
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); 
    setInput(value);

    // displayed image based on the user input
    if (value === "love") {
      setPic(Love);
    } else if (value === "like") {
      setPic(Like);
    } else if (value === "sad") {
      setPic(Sad);
    } 
  };

  return (
    <div className="App">
      <h2>Emoji reveal</h2>
      {/* Text box */}
      <input
        type="text"
        placeholder="Type 'Love', 'Like', or 'Sad'"
        value={input}
        onChange={handleInputChange}
      />

      {/* Label */}
      <div style={{ marginTop: "30px" }}>
        {pic ? (
          <img src={pic} alt={input} style={{ width: "100px", height: "100px" }} />
        ) : (
          <p>type to see the result</p>
        )}
      </div>
    </div>
  );
}

export default EmojiText;
