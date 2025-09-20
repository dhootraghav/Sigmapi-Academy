import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/legacy.css";   // <- your exact CSS
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";

function Placeholder({ title }) {
  return <div style={{ padding: "4rem 1rem", fontSize: 20 }}>{title}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="school" element={<Placeholder title="School Based" />} />
          <Route path="college" element={<Placeholder title="College Based" />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
