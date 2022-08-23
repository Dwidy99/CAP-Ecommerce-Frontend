import React from "react";
import "./App.css";
import Nav from "./components/Navbar";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import CartPage from "./pages/cartPage";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import DetailPage from "./pages/detailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
