
import { useState, useEffect } from "react";

function LiveSearch() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  return (
    <div>
      <h2>Live Search</h2>

      <input
        className="live-input"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="greeting">
        Hello, {name || "Student"}!
      </div>
    </div>
  );
}

export default LiveSearch;
