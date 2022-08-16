import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Result from "./components/Result";
import ContentProduct from "./components/ContentProduct";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Slider />
      <ContentProduct />
      <Search />
      <Result />
    </>
  );
}

export default App;
