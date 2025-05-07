import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
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
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const menuRef = useRef<HTMLUListElement>(null);
	const toggleButtonRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Handle clicks outside the navbar
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// Only run this in mobile mode when menu is open
			if (!isMobile || !isOpen) return;

			// Check if click is outside both the menu and the toggle button
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		// Add event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, isMobile]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
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
				{/* Mobile Menu Button - Hanya tampil di mobile */}
				{isMobile && (
					<button
						className="mobile-menu-toggle"
						onClick={toggleMenu}
						aria-label="Toggle menu"
						ref={toggleButtonRef}
					>
						{isOpen ? <FaTimes /> : <FaBars />}
					</button>
				)}

				<NavLink
					to="/"
					className={`navbar-logo ${isMobile ? "mobile-logo" : ""}`}
				>
					{!isMobile && (
						<Avatar
							src="/avatar.jpg"
							alt="David"
							size={50}
							className="navbar-avatar"
						/>
					)}
					<span className="logo-text shiny-text">David's Portfolio</span>
				</NavLink>

				<ul className={`navbar-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
					{isMobile && (
						<li className="navbar-profile">
							<div className="profile-container">
								<Avatar
									src="/avatar.jpg"
									alt="Ivan David"
									size={50}
									className="profile-avatar-wrapper"
								/>
								<div className="profile-info">
									<div className="profile-avatar-text">Ivan David</div>
									<div className="profile-phone">
										<span>+6281286287585</span>
									</div>
								</div>
							</div>
						</li>
					)}

					{/* Divider after profile section */}
					{isMobile && <li className="navbar-divider"></li>}
					{navLinks.map((link, index) => (
						<li key={index} className="navbar-item">
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									`navbar-link ${isActive ? "active" : ""}`
								}
								end={link.path === "/"}
								onClick={() => isMobile && setIsOpen(false)}
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
				<div className={`navbar-icons ${isMobile ? "mobile-icons" : ""}`}>
					<button
						className="theme-toggle"
						onClick={toggleDarkMode}
						aria-label="Toggle theme"
					>
						{darkMode ? <FaSun /> : <FaMoon />}
					</button>
					{!isMobile && (
						<button
							className="menu-toggle"
							onClick={toggleMenu}
							aria-label="Toggle menu"
						>
							{isOpen ? <FaTimes /> : <FaBars />}
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
