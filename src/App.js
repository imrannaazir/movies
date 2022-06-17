import Movies from "./pages/Movies";
import Navbar from "./shared/Navbar";
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Toaster />

    </div>
  );
}

export default App;
