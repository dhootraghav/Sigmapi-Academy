import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/legacy.css";   // <- your exact CSS
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import School from "./pages/School.jsx";
import College from "./pages/College.jsx";
import ICSE from "./pages/ICSE.jsx";
import CBSE from "./pages/CBSE.jsx";
import WB from "./pages/WB.jsx";
import IGCSE from "./pages/IGCSE.jsx";
import AP from "./pages/AP.jsx";

// ✅ import college course detail pages
import Java from "./pages/college/Java.jsx";
import JavaAdvanced from "./pages/college/JavaAdvanced.jsx";
import CProg from "./pages/college/CProg.jsx";
import Cpp from "./pages/college/Cpp.jsx";
import Rdbms from "./pages/college/Rdbms.jsx";
import Dsa from "./pages/college/Dsa.jsx";

function Placeholder({ title }) {
  return <div style={{ padding: "4rem 1rem", fontSize: 20 }}>{title}</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="school" element={<School />} />
          <Route path="college" element={<College />} />

          {/* ✅ college course detail routes */}
          <Route path="college/java" element={<Java />} />
          <Route path="college/java-advanced" element={<JavaAdvanced />} />
          <Route path="college/c" element={<CProg />} />
          <Route path="college/cpp" element={<Cpp />} />
          <Route path="college/rdbms" element={<Rdbms />} />
          <Route path="college/dsa" element={<Dsa />} />

          {/* existing */}
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
          <Route path="icse" element={<ICSE />} />
          <Route path="cbse" element={<CBSE />} />
          <Route path="wb" element={<WB />} />
          <Route path="igcse" element={<IGCSE />} />
          <Route path="ap" element={<AP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
