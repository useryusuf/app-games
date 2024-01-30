import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
