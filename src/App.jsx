import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Navbar onSearch={(term) => setSearchTerm(term)} />

      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
