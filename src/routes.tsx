"use client";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home"; // Sesuaikan path jika berbeda
import Education from "./pages/Education/Education"; // Sesuaikan path jika berbeda
import Experience from "./pages/Experience/Experience"; // Sesuaikan path jika berbeda
import Skills from "./pages/Skills/Skills"; // Sesuaikan path jika berbeda
import Achievement from "./pages/Achievement/Achievements"; // Sesuaikan path jika berbeda
import Contact from "./pages/Contact/Contact"; // Sesuaikan path jika berbeda

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
