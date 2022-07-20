import React from "react";
import CustomizedAccordions from "./CustomizedAccordions";

const todo = [
  {
    name: "todo 01",
    dis: "todo dis 01",
  },
  {
    name: "todo 02",
    dis: "todo dis 02",
  },
  {
    name: "todo 03",
    dis: "todo dis 03",
  },
  {
    name: "todo 04",
    dis: "todo dis 04",
  },
];

export default function Left() {
  return (
    <div>
      {/* <div
        styles={{ height: "500px", overflowY: "scroll" }}
        // style={styles.wrapperDiv}
      >
        <p>asa</p>
      </div> */}
      <CustomizedAccordions />
    </div>
  );
}
