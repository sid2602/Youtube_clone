import React from "react";
import NavProvider from "./Context/NavContext";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <NavProvider>
        <Navbar />
      </NavProvider>
    </div>
  );
}

export default App;
