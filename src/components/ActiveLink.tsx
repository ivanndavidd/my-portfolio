import type React from "react";
import { Link, useLocation } from "react-router-dom";

interface ActiveLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
}

const ActiveLink = ({ to, children, className = "" }: ActiveLinkProps) => {
	const location = useLocation();
	const isActive = location.pathname === to;

	return (
		<Link to={to} className={`${className} ${isActive ? "active" : ""}`}>
			{children}
		</Link>
	);
};

export default ActiveLink;
