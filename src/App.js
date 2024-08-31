import React from "react";
import MediaQuery from "./components/MediaQuery";
import Tooltip from "./components/Tooltip";
import Float from "./components/Float";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <div className="App">
      {/* <MediaQuery />
      <Tooltip />
      <Float />
      <Layout1 />
      <Layout2 /> */}
      <Calculator/>
    </div>
  );
}

export default App;
