import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-8 bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-center md:text-left">
							&copy; {currentYear} Portfolio. All rights reserved.
						</p>
					</div>

					<div className="flex space-x-4">
						<a
							href="#"
							className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
							aria-label="LinkedIn"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href="#"
							className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
							aria-label="GitHub"
						>
							<FaGithub size={20} />
						</a>
						<a
							href="#contact"
							className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
							aria-label="Email"
						>
							<FaEnvelope size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
