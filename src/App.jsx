import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState("");
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home term={term} />} />
          <Route
            path="/game/:slug"
            element={<GameDetail onSearch={(term) => setTerm(term)} />}
          />
        </Routes>
      </main>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
