import React, { Suspense } from "react";
import "./App.css";
import "./main";
import Nav from "./components/Nav";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
