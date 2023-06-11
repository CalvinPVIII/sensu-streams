import "../css/App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vods from "./Vods";
import WatchEpisode from "./WatchEpisode";
import AllSeries from "./AllSeries";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vods" element={<AllSeries />} />
        <Route path="/vods/:series" element={<Vods />} />
        <Route path="/vods/:series/:episode" element={<WatchEpisode />} />
      </Routes>
    </>
  );
}

export default App;
