import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Navbar from "./components/Navbar.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
