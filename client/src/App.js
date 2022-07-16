import "./App.css";
import Design from "./Design/Design";
import LoadingSc from "./Design/LoadingSc/LoadingSc";
import React from "react";

function App() {
  const [t, setT] = React.useState(false);
  setTimeout(() => {
    setT(true);
  }, 2000);
  return (
    <div>
      {!t && <LoadingSc />}
      {t && <Design />}
    </div>
  );
}

export default App;
