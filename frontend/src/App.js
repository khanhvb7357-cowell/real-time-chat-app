import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/messenger/login" element={<Login />}></Route>
        <Route path="/messenger/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
