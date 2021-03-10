import NavProvider from "./Context/NavContext";
import Navbar from "./Components/Navbar";
import VideoProvider from "./Context/VideoContext";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage/SearchPage";
import VideoPage from "./Components/VideoPage/VideoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <VideoProvider>
        <Router>
          <NavProvider>
            <Navbar />
          </NavProvider>

          <main className=" h-full m-0 py-12  bg-gray-50">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/search/:search_query" component={SearchPage} />
              <Route path="/video/:search_query" component={VideoPage} />
            </Switch>
          </main>
        </Router>
      </VideoProvider>
    </div>
  );
}

export default App;
