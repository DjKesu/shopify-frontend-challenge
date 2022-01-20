import "../App.css";
import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);
  const [label, setLabel] = useState("Like");
  const [color, setColor] = useState("black");

  function toggle() {
    setLike(!like);
    if (!like) {
      setLabel("Unlike");
      setColor("white");
    } else {
      setLabel("Like");
      setColor("black");
    }
  }
  return (
    <button
      onClick={toggle}
      style={{ color: color, backgroundColor: "grey" }}
    >
      ❤️{label}
    </button>
  );
}

export default LikeButton;
