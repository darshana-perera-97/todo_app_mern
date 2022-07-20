import React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";

export default function Body() {
  return (
    <div style={{ background: "rgba(255,255,255,0.2)", display: "flex" }}>
      <Left />
      <Right />
    </div>
  );
}
