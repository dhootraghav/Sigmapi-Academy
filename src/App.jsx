import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
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
