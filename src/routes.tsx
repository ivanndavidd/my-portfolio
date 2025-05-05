import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Achievement from "./pages/Achievement/Achievements";
import Contact from "./pages/Contact/Contact";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
