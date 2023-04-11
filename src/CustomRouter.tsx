import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./pages/Home";

export default function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
