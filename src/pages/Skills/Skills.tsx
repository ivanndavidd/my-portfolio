import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaCode,
	FaBrain,
	FaTools,
	FaLanguage,
	FaChevronDown,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

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
				{ name: "AutoCAD", level: 80 },
				{ name: "SolidWorks", level: 75 },
				{ name: "Fusion 360", level: 70 },
				{ name: "Code Blocks (C)", level: 75 },
				{ name: "NetBeans (Java)", level: 70 },
				{ name: "EasyBuilder Pro (HMI)", level: 80 },
				{ name: "MATLAB", level: 85 },
				{ name: "Microsoft Office", level: 90 },
				{ name: "Proteus", level: 75 },
				{ name: "MySQL", level: 85 },
				{ name: "Power BI", level: 80 },
				{ name: "Festo FluidSIM", level: 75 },
				{ name: "Simetic Step 7 (Siemens)", level: 80 },
				{ name: "Laravel", level: 75 },
				{ name: "Javascript", level: 85 },
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
				{ name: "Presentation", level: 85 },
				{ name: "Project Management", level: 80 },
				{ name: "Research Analysis", level: 90 },
				{ name: "Teaching", level: 80 },
			],
		},
		{
			title: "Knowledge",
			icon: <FaTools />,
			skills: [
				{ name: "Artificial Intelligence", level: 90 },
				{ name: "Machine Learning", level: 90 },
				{ name: "Software Development", level: 85 },
				{ name: "Data Analysis", level: 90 },
				{ name: "Programmer Logic Control (PLC)", level: 85 },
				{ name: "Human Machine Interface (HMI)", level: 80 },
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
					name: "English",
					level: 90,
					description: "Full Professional Proficiency",
				},
				{ name: "Indonesian", level: 100, description: "Native Proficiency" },
			],
		},
	];

	const toggleSkill = (index: number) => {
		if (expandedSkill === index) {
			setExpandedSkill(null);
		} else {
			setExpandedSkill(index);
		}
	};

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

				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="skills-content"
					>
						<div className="skills-grid">
							{skillCategories[activeTab].skills.map((skill, index) => (
								<motion.div
									key={index}
									className="skill-card"
									variants={itemVariants}
									onClick={() => toggleSkill(index)}
								>
									<div className="skill-header">
										<h3 className="skill-name">{skill.name}</h3>
										<FaChevronDown
											className={`skill-toggle ${
												expandedSkill === index ? "active" : ""
											}`}
										/>
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
									{/* {expandedSkill === index && skill.description && (
										<motion.div
											className="skill-description"
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
										>
											<p>{skill.description}</p>
										</motion.div>
									)} */}
								</motion.div>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</motion.section>
	);
};

export default Skills;
