import React, { Suspense } from "react";
import "./App.css";
import "./main";
import Nav from "./components/Nav";
import LoginPage from "./components/pages/loginPage";
import HomePage from "./components/pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
