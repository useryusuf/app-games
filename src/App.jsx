import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container-fluid">
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
