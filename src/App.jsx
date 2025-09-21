import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  // Show navbar for all pages now since board pages use the global navbar
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f7]">
      <header className="main-header">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
