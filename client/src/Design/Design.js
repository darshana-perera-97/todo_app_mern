import React from "react";
import Body from "./Body/Body";
import BottomBar from "./BottomBar/BottomBar";
import TopBar from "./TopBar/TopBar";

export default function Design() {
  return (
    <div>
      <TopBar />
      <Body />
      <BottomBar style={{ bottom: "0px" }} />
    </div>
  );
}
