import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar"; // Sesuaikan path jika berbeda
import Loader from "./components/Loader"; // Sesuaikan path jika berbeda
import AppRoutes from "./routes"; // Kita akan membuat file routes terpisah
import "./App.css";

function App() {
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		// Simulate loading time
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (!darkMode) {
			document.documentElement.classList.add("dark-mode");
		} else {
			document.documentElement.classList.remove("dark-mode");
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<Router>
			<div className={`app ${darkMode ? "dark-mode" : ""}`}>
				<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
				<AppRoutes />
			</div>
		</Router>
	);
}

export default App;
