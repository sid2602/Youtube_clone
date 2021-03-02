import React from "react";
import NavProvider from "./Context/NavContext";
import Navbar from "./Components/Navbar";
import VideoProvider from "./Context/VideoContext";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <VideoProvider>
        <NavProvider>
          <Navbar />
        </NavProvider>
        <Router>
          <main className=" h-full bg-red-100 m-0 py-2 md:p-6">
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </main>
        </Router>
      </VideoProvider>
    </div>
  );
}

export default App;
