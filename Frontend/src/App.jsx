import React from "react";
import Routing from "./Utils/Routing";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-200">
      <Nav></Nav>
      <Routing></Routing>
    </div>
  );
};

export default App;
