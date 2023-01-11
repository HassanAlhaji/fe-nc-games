import "../src/styling/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:reviewId" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
