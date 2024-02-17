import { useEffect, useState } from "react";

function random() {
  const rand = Math.floor(Math.random() * 16777215)
    .toString(16)
    .toLocaleUpperCase();
  if (rand.length === 1) return `00000${rand}`;
  else if (rand.length === 2) return `0000${rand}`;
  else if (rand.length === 3) return `000${rand}`;
  else if (rand.length === 4) return `00${rand}`;
  else if (rand.length === 5) return `0${rand}`;
  return rand;
}

export function Button() {
  const [color, setColor] = useState(
    !localStorage.getItem("color")
      ? `#${random()}`
      : localStorage.getItem("color")
  );

  function handleClick() {
    setColor(() => `#${random()}`);
  }

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);
  return (
    <div style={{ backgroundColor: color }}>
      <p>The color is {color}</p>
      <button onClick={handleClick}>{color}</button>
    </div>
  );
}
