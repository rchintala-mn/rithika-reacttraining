import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AxiosLogin from "./axiosLogin";
import AxioSignup from "./axioSignup";
import Search from "./Search";
import AxioCakeList from "./axioCakeList";
import AxiosCakedetails from "./AxiosCakedetails";
import CheckOut from "./CheckOut";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<AxiosLogin />}></Route>
          <Route path="/signup" element={<AxioSignup />}></Route>
          <Route path="/cakes" element={<AxioCakeList />}></Route>
          <Route
            path="/detailCard/:cakeid"
            element={<AxiosCakedetails />}
          ></Route>
          <Route path="/cart" element={<CheckOut />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
