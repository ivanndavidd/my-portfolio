import React from "react";

import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaMedal, FaAward } from "react-icons/fa";
import "./Achievement.css";

const Achievements = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const achievements = [
		{
			title:
				"Student Exchange Candidate to Asia Pacific University (APU) Japan",
			year: "2021",
			icon: <FaTrophy />,
			color: "#FFD700",
		},
		{
			title: "Jababeka Scholarship Awardee",
			year: "2018",
			icon: <FaAward />,
			color: "#C0C0C0",
		},
		{
			title: "Adaro Foundation Scholarship Awardee",
			year: "2019",
			icon: <FaAward />,
			color: "#CD7F32",
		},
	];

	const certifications = [
		{
			title: "Google IT Automation with Python",
			year: "2023",
			icon: <FaCertificate />,
			issuer: "Google",
			color: "#4285F4",
		},
		{
			title: "Deeplearning.AI Machine Learning",
			year: "2023",
			icon: <FaCertificate />,
			issuer: "Deeplearning.AI",
			color: "#0077B5",
		},
		{
			title: "ICL Mathematics of Machine Learning",
			year: "2023",
			icon: <FaCertificate />,
			issuer: "Imperial College London",
			color: "#003E74",
		},
		{
			title: "MySQL Dev",
			year: "2022",
			icon: <FaCertificate />,
			issuer: "Oracle",
			color: "#F80000",
		},
		{
			title: "Google Data Analysis",
			year: "2023",
			icon: <FaCertificate />,
			issuer: "Google",
			color: "#4285F4",
		},
		{
			title: "Deeplearning.AI Tensorflow Developed",
			year: "2023",
			icon: <FaCertificate />,
			issuer: "Deeplearning.AI",
			color: "#FF6F00",
		},
		{
			title: "President English Short Course Certificate",
			year: "2022",
			icon: <FaCertificate />,
			issuer: "President University",
			color: "#1E88E5",
		},
	];

	return (
		<motion.section
			className="achievements-section section"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="container">
				<motion.h2 className="section-title" variants={itemVariants}>
					<FaTrophy className="section-icon" />
					Achievements & Certifications
				</motion.h2>

				<div className="achievements-container">
					<motion.div className="achievements-group" variants={itemVariants}>
						<h3 className="group-title">
							<FaMedal className="group-icon" />
							Achievements
						</h3>
						<div className="achievements-grid">
							{achievements.map((item, index) => (
								<motion.div
									key={index}
									className="achievement-card"
									variants={itemVariants}
									style={{ "--card-color": item.color } as React.CSSProperties}
								>
									<div className="achievement-icon">{item.icon}</div>
									<div className="achievement-content">
										<h4 className="achievement-title">{item.title}</h4>
										<p className="achievement-year">{item.year}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div className="achievements-group" variants={itemVariants}>
						<h3 className="group-title">
							<FaCertificate className="group-icon" />
							Certifications
						</h3>
						<div className="certifications-grid">
							{certifications.map((item, index) => (
								<motion.div
									key={index}
									className="certification-card"
									variants={itemVariants}
									style={{ "--card-color": item.color } as React.CSSProperties}
								>
									<div className="certification-icon">{item.icon}</div>
									<div className="certification-content">
										<h4 className="certification-title">{item.title}</h4>
										<p className="certification-issuer">{item.issuer}</p>
										<p className="certification-year">{item.year}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Achievements;
