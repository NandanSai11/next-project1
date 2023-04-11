import LoginPage from "../Components/LoginPage";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Home";

export default function Home() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <LoginPage />
    </>
  );
}
