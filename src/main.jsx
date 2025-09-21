// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/legacy.css";
import "./styles/boards.css";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Testimonial from "./pages/Testimonial.jsx";
import Contact from "./pages/Contact.jsx";
import School from "./pages/School.jsx";
import College from "./pages/College.jsx";

// ICSE
import ICSE from "./pages/ICSE.jsx";
import ICSEClass from "./pages/ICSEClass.jsx";
import ICSESyllabus from "./pages/ICSESyllabus.jsx";

// CBSE
import CBSE from "./pages/CBSE.jsx";
import CBSEClass from "./pages/CBSEClass.jsx";
import CBSESyllabus from "./pages/CBSESyllabus.jsx";

// IGCSE & AP
import IGCSE from "./pages/IGCSE.jsx";
import AP from "./pages/AP.jsx";

// WB
import WB from "./pages/WB.jsx";
import WBClass from "./pages/WBClass.jsx";
import WBSyllabus from "./pages/WBSyllabus.jsx";

// College detail pages
import Java from "./pages/college/Java.jsx";
import JavaAdvanced from "./pages/college/JavaAdvanced.jsx";
import CProg from "./pages/college/CProg.jsx";
import Cpp from "./pages/college/Cpp.jsx";
import Rdbms from "./pages/college/Rdbms.jsx";
import Dsa from "./pages/college/Dsa.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* top-level */}
          <Route index element={<Home />} />
          <Route path="school" element={<School />} />
          <Route path="college" element={<College />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />

          {/* college detail routes */}
          <Route path="college/java" element={<Java />} />
          <Route path="college/java-advanced" element={<JavaAdvanced />} />
          <Route path="college/c" element={<CProg />} />
          <Route path="college/cpp" element={<Cpp />} />
          <Route path="college/rdbms" element={<Rdbms />} />
          <Route path="college/dsa" element={<Dsa />} />

          {/* ICSE — landing + class + subject (support slash and hyphen) */}
          <Route path="icse" element={<ICSE />} />
          <Route path="icse/class/:grade" element={<ICSEClass />} />
          <Route path="icse/class/:grade/:subject" element={<ICSESyllabus />} />

          {/* CBSE — landing + class + subject (support slash and hyphen) */}
          <Route path="cbse" element={<CBSE />} />
          <Route path="cbse/class/:grade" element={<CBSEClass />} />
          <Route path="cbse/class/:grade/:subject" element={<CBSESyllabus />} />

          {/* IGCSE & AP */}
          <Route path="igcse" element={<IGCSE />} />
          <Route path="ap" element={<AP />} />

          {/* WB — landing + class + subject (support slash and hyphen) */}
          <Route path="wb" element={<WB />} />
          <Route path="wb/class/:grade" element={<WBClass />} />
          <Route path="wb/class/:grade/:subject" element={<WBSyllabus />} />
          <Route path="wb/class-:grade" element={<WBClass />} />
          <Route path="wb/class-:grade/:subject" element={<WBSyllabus />} />

          {/* 404 */}
          <Route path="*" element={<div style={{ padding: 24 }}>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
