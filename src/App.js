import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import "./App.css"
import Search from "./components/Search";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
