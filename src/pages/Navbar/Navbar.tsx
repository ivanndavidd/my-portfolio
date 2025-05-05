import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Avatar from "../../components/Avatar";

// Definisikan tipe props
interface NavbarProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/education", label: "Education" },
		{ path: "/experience", label: "Experience" },
		{ path: "/skills", label: "Skills" },
		{ path: "/achievements", label: "Achievements" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			<div className="navbar-container">
				<NavLink to="/" className="navbar-logo">
					<Avatar
						src="/avatar.jpg"
						alt="David"
						size={36}
						className="navbar-avatar"
					/>
					<span className="logo-text shiny-text">David's Portfolio</span>
				</NavLink>

				<ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
					{navLinks.map((link, index) => (
						<li key={index} className="navbar-item">
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									`navbar-link ${isActive ? "active" : ""}`
								}
								end={link.path === "/"}
							>
								{({ isActive }) => (
									<span className={`nav-text ${isActive ? "shiny-text" : ""}`}>
										{link.label}
									</span>
								)}
							</NavLink>
						</li>
					))}
				</ul>

				<div className="navbar-icons">
					<button
						className="theme-toggle"
						onClick={toggleDarkMode}
						aria-label="Toggle theme"
					>
						{darkMode ? <FaSun /> : <FaMoon />}
					</button>
					<button
						className="menu-toggle"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{isOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
