// import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NameSvg from "./assets/NameSvg";
import { useEffect, useState } from "react";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      setIsLoading(false);
    };
    fakeAsyncOperation();
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <NameSvg />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="me" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="loader" element={<NameSvg />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
