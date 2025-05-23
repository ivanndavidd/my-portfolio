import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaTools, FaLanguage } from "react-icons/fa";
import TechLogos from "../../components/TechLogos";
import "./Skills.css";

const Skills = () => {
	const [activeTab, setActiveTab] = useState(0);

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

	const skillCategories = [
		{
			title: "Technical Skills",
			icon: <FaCode />,
			skills: [
				{ name: "Python", level: 90 },
				{ name: "Microsoft Server SQL", level: 85 },
				{ name: "WPF", level: 75 },
				{ name: "C#", level: 80 },
				{ name: "TensorFlow", level: 85 },
				{ name: "PyTorch", level: 80 },
				{ name: "Scikit-Learn", level: 90 },
				{ name: "Hadoop", level: 70 },
				{ name: "Spark", level: 75 },
				{ name: "CX Programmer (Omron)", level: 85 },
				{ name: "Spring Boot", level: 80 },
				{ name: "Golang", level: 80 },
				{ name: "C++", level: 90 },
				{ name: "Java", level: 80 },
				{ name: "CSS", level: 80 },
				{ name: "MATLAB", level: 85 },
				{ name: "Microsoft Office", level: 90 },
				{ name: "Proteus", level: 75 },
				{ name: "MySQL", level: 85 },
				{ name: "TypeScript", level: 80 },
				{ name: "Vue JS", level: 75 },
				{ name: "Simetic Step 7 (Siemens)", level: 80 },
				{ name: "Laravel", level: 75 },
				{ name: "JavaScript", level: 85 },
			],
		},
		{
			title: "Soft Skills",
			icon: <FaBrain />,
			skills: [
				{ name: "Communication Skill", level: 90 },
				{ name: "Time Management", level: 85 },
				{ name: "Networking", level: 80 },
				{ name: "Analytical Thinking", level: 95 },
				{ name: "Problem Solving", level: 90 },
				{ name: "Synthesizing Information", level: 85 },
				{ name: "Attention to Detail", level: 90 },
				{ name: "Presentation", level: 90 },
				{ name: "Project Management", level: 90 },
				{ name: "Research Analysis", level: 90 },
				{ name: "Teaching", level: 90 },
			],
		},
		{
			title: "Knowledge",
			icon: <FaTools />,
			skills: [
				{ name: "Artificial Intelligence", level: 90 },
				{ name: "Machine Learning", level: 90 },
				{ name: "Software Development", level: 90 },
				{ name: "Data Analysis", level: 90 },
				{ name: "Programmer Logic Control (PLC)", level: 100 },
				{ name: "Human Machine Interface (HMI)", level: 90 },
				{ name: "Computer-Aided Design (CAD)", level: 75 },
				{ name: "Automation System", level: 85 },
				{ name: "Industrial Management", level: 80 },
				{ name: "AWS Cloud Systems", level: 75 },
				{ name: "Power BI Essential", level: 80 },
				{ name: "Pneumatic Wiring System", level: 75 },
				{ name: "Drawing Electrical Wiring", level: 80 },
			],
		},
		{
			title: "Language",
			icon: <FaLanguage />,
			skills: [
				{
					name: "Korean (한국어)",
					level: 20,
					description: "Elementary Proficiency",
				},
				{
					name: "English",
					level: 90,
					description: "Full Professional Proficiency",
				},
				{ name: "Bahasa", level: 100, description: "Native Proficiency" },
			],
		},
	];

	return (
		<motion.section
			className="skills-section section"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="container">
				<motion.h2 className="section-title" variants={itemVariants}>
					<FaCode className="section-icon" />
					Skills & Expertise
				</motion.h2>

				<motion.div className="skills-tabs" variants={itemVariants}>
					{skillCategories.map((category, index) => (
						<button
							key={index}
							className={`skills-tab ${activeTab === index ? "active" : ""}`}
							onClick={() => setActiveTab(index)}
						>
							<span className="tab-icon">{category.icon}</span>
							<span className="tab-text">{category.title}</span>
						</button>
					))}
				</motion.div>

				<div className="skills-content">
					<div className="skills-grid">
						{skillCategories[activeTab].skills.map((skill, index) => (
							<motion.div
								key={`${activeTab}-${index}`}
								className="skill-card"
								variants={itemVariants}
								initial="hidden"
								animate="visible"
							>
								<div className="skill-header">
									<h3 className="skill-name">{skill.name}</h3>
								</div>
								<div className="skill-progress">
									<div className="skill-bar">
										<motion.div
											className="skill-fill"
											initial={{ width: 0 }}
											animate={{ width: `${skill.level}%` }}
											transition={{ duration: 1, delay: 0.2 }}
										></motion.div>
									</div>
									<span className="skill-percentage">{skill.level}%</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
				{activeTab === 0 && <TechLogos />}
			</div>
		</motion.section>
	);
};

export default Skills;
