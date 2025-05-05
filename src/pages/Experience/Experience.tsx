"use client";

import { motion } from "framer-motion";
import {
	FaBriefcase,
	FaBuilding,
	FaMapMarkerAlt,
	FaCalendarAlt,
} from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
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

	const experienceData = [
		{
			title: "Fullstack Engineer",
			company: "PT. LG SINARMAS",
			location: "Jakarta, Indonesia",
			period: "Apr 2024 - Present",
			description:
				"Global Development Center (GDC) is responsible to maintain the development of software, application, and analyze data in variety sector of business. GDC is taking over in the sector of smart factory, smart city, and artificial intelligence.",
			responsibilities: [
				"Developing logic rules of back-end system using BizActor",
				"Developing logic rules of front-end system using C# and Java",
				"Analyzing the data using SQL Server Management",
				"Developing Manufacture Execution System (MES) of Electrode, Assembly, Formation, and Pack at the battery manufacture PT. HLI Green Power in Karawang",
				"Developing system of MCS, EIF, IoT, and SPC+",
				"Testing request project development",
				"Maintaining and developing smart factory system in other factory and country that part with LG Energy Solution and LG CNS",
				"Handling CSR (Customer Service Request) either developing, testing, or analyze of project category",
			],
		},
		{
			title: "Freelance (IT, AI, and Data Analyst Field)",
			company: "SELF EMPLOYMENT",
			location: "Cikarang, Indonesia",
			period: "Nov 2023 – Present",
			description:
				"As a Freelance IT, AI, and Data Analyst, I have contributed to various innovative projects in the fields of information technology, artificial intelligence, and data analytics. My role has involved designing and implementing advanced AI models, analyzing complex datasets, and providing insights to optimize business processes.",
			responsibilities: [
				"Analyzed and interpreted large datasets to extract actionable insights and support decision-making",
				"Developed AI models and algorithms for predictive analytics, automation, and optimization",
				"Implemented IT solutions to address specific client needs, ensuring efficient system integration",
				"Created interactive data visualizations and reports for clear communication with stakeholders",
				"Conducted data cleaning, preparation, and transformation to ensure data quality",
				"Collaborated with cross-functional teams to implement AI-driven solutions",
				"Ensured data security and compliance with industry standards",
				"Delivered AI-driven solutions that improved operational efficiency for multiple clients",
				"Developed a predictive model that reduced client costs by identifying key performance drivers",
				"Designed data dashboards that enhanced the visibility of business metrics and performance indicators",
			],
		},
		{
			title: "Electrical and Computer Engineer Leader",
			company: "PT. SCG LIGHTWEIGHT CONCRETE INDONESIA",
			location: "Karawang, Indonesia",
			period: "Nov 2022 – Nov 2023",
			description:
				"Electrical and Computer Engineer Leader is responsible to maintain all electrical senior operation, IT Project related to Data Analytic, IT Project Management, executed IT project, inspection to find abnormalities of the machine, creating jobs and project schedule to reducing downtime frequency, maintaining and creating a new PLC program, maintaining Network communication, maintaining IoT management SAP ERP for operation business",
			responsibilities: [
				"Creating daily jobs and projects schedule",
				"Designed PLC Programs for Cement Project",
				"Developing IoT Management SAP ERP for operation business using PHP Codeigniter and SQL",
				"Developing Network communication using TCP/IP or LAN to be maintaining each part of sectors especially production machinery",
				"Developing Artificial Intelligence especially Machine Learning for smart prediction maintenance using SQL to developing the data's machine and using Decision Tree for the algorithm using Python",
				"Web Developing using Javascript",
				"Monitoring all Electrical senior operation",
			],
		},
		{
			title: "Maintenance Engineer",
			company: "PT. KALBE NUTRITIONALS",
			location: "Cikampek, Indonesia",
			period: "Aug 2021 - Aug 2022",
			description:
				"Maintenance Engineer is responsible for developing the machine effectiveness and efficiency improvement project by increasing process automation systems, smart maintenance, and machine learning.",
			responsibilities: [
				"Designed and sized Machine Auto Spoon Bowl Feeder using PLC to control and AutoCAD to generate detailed computer drawings",
				"Conducted Change Over system efficiency by designing Auto Change Over Without Homing Process using PLC to control every component and sensor used",
				"Manage and helping Maintenance Staff do troubleshooting and preventive maintenance for Auto Seal of Sachet Packaging and Auto Lubrication",
			],
		},
	];

	return (
		<motion.section
			className="experience-section section"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<div className="container">
				<motion.h2 className="section-title" variants={itemVariants}>
					<FaBriefcase className="section-icon" />
					Professional Experience
				</motion.h2>

				<div className="experience-container">
					{experienceData.map((exp, index) => (
						<motion.div
							key={index}
							className="experience-card"
							variants={itemVariants}
						>
							<div className="experience-header">
								<h3 className="experience-title">{exp.title}</h3>
								<div className="experience-company">
									<FaBuilding className="experience-icon" />
									<span>{exp.company}</span>
								</div>
								<div className="experience-meta">
									<div className="experience-location">
										<FaMapMarkerAlt className="experience-icon" />
										<span>{exp.location}</span>
									</div>
									<div className="experience-period">
										<FaCalendarAlt className="experience-icon" />
										<span>{exp.period}</span>
									</div>
								</div>
							</div>
							<div className="experience-body">
								<p className="experience-description">{exp.description}</p>
								<div className="experience-responsibilities">
									<h4>Key Responsibilities:</h4>
									<ul>
										{exp.responsibilities.map((resp, idx) => (
											<li key={idx}>{resp}</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Experience;
