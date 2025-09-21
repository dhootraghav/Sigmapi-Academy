// src/App.jsx
import "./styles/boards.css";           // ⟵ load board styles globally
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f7]">
      <header className="main-header">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* Scroll to top on route change */}
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
