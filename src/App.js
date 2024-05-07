import "./App.css";
import CakeList from "./CakeList";
import Details from "./Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
function App() {
  return (
    // <div Style="text-align:center;">
    <div Style="text-align:center;">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cakes" element={<CakeList />}></Route>
          <Route path="/detailCard" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
