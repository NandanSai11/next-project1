import LoginPage from "../Components/LoginPage";
import Head from "next/head";
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
      <Head>
        <title>posts/comments by next js</title>
      </Head>
      <LoginPage />
    </>
  );
}
