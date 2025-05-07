import type React from "react";

import { useEffect, useState } from "react";
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaJava,
	FaDatabase,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaAws,
	FaVuejs,
	FaAngular,
	FaPhp,
	FaLaravel,
	FaBootstrap,
	FaGithub,
	FaGitAlt,
	FaChartBar,
} from "react-icons/fa";
import {
	SiTensorflow,
	SiPytorch,
	SiMysql,
	SiMongodb,
	SiCsharp,
	SiScikitlearn,
	SiJupyter,
	SiKeras,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiExpress,
	SiDjango,
	SiSpring,
	SiDotnet,
	SiPostgresql,
	SiRedis,
	SiFirebase,
	SiJenkins,
	SiGooglecloud,
	SiAzuredevops,
	SiPandas,
	SiNumpy,
	SiOpencv,
	SiPlotly,
	SiMlflow,
	SiDatabricks,
	SiWindows,
	SiMicrosoftsqlserver,
} from "react-icons/si";
import "./TechLogos.css";

interface LogoProps {
	icon: React.ReactNode;
	name: string;
	delay: number;
	duration: number;
}

interface TechCategory {
	title: string;
	logos: LogoProps[];
}

const Logo: React.FC<LogoProps> = ({ icon, name, delay, duration }) => {
	return (
		<div
			className="tech-logo"
			style={{
				animationDelay: `${delay}s`,
				animationDuration: `${duration}s`,
			}}
		>
			<div className="tech-logo-icon">{icon}</div>
			<span className="tech-logo-name">{name}</span>
		</div>
	);
};

const TechLogos: React.FC = () => {
	const [categories, setCategories] = useState<TechCategory[]>([]);

	useEffect(() => {
		// Define technology categories
		const techCategories: TechCategory[] = [
			{
				title: "Frontend",
				logos: [
					{ icon: <FaReact size={40} />, name: "React", delay: 0, duration: 0 },
					{
						icon: <FaJs size={40} />,
						name: "JavaScript",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiTypescript size={40} />,
						name: "TypeScript",
						delay: 0,
						duration: 0,
					},
					{ icon: <FaHtml5 size={40} />, name: "HTML5", delay: 0, duration: 0 },
					{
						icon: <FaCss3Alt size={40} />,
						name: "CSS3",
						delay: 0,
						duration: 0,
					},
					{
						icon: <FaVuejs size={40} />,
						name: "Vue.js",
						delay: 0,
						duration: 0,
					},
					{
						icon: <FaAngular size={40} />,
						name: "Angular",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiNextdotjs size={40} />,
						name: "Next.js",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiTailwindcss size={40} />,
						name: "Tailwind",
						delay: 0,
						duration: 0,
					},
					{
						icon: <FaBootstrap size={40} />,
						name: "Bootstrap",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiWindows size={40} />,
						name: "WPF",
						delay: 0,
						duration: 0,
					},
				],
			},
			{
				title: "Backend",
				logos: [
					{
						icon: <FaNodeJs size={40} />,
						name: "Node.js",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiExpress size={40} />,
						name: "Express",
						delay: 0,
						duration: 0,
					},
					{
						icon: <FaPython size={40} />,
						name: "Python",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiDjango size={40} />,
						name: "Django",
						delay: 0,
						duration: 0,
					},
					{ icon: <FaJava size={40} />, name: "Java", delay: 0, duration: 0 },
					{
						icon: <SiSpring size={40} />,
						name: "Spring",
						delay: 0,
						duration: 0,
					},
					{ icon: <SiCsharp size={40} />, name: "C#", delay: 0, duration: 0 },
					{ icon: <SiDotnet size={40} />, name: ".NET", delay: 0, duration: 0 },
					{ icon: <FaPhp size={40} />, name: "PHP", delay: 0, duration: 0 },
					{
						icon: <FaLaravel size={40} />,
						name: "Laravel",
						delay: 0,
						duration: 0,
					},
				],
			},
			{
				title: "Database",
				logos: [
					{
						icon: <FaDatabase size={40} />,
						name: "SQL",
						delay: 0,
						duration: 0,
					},
					{ icon: <SiMysql size={40} />, name: "MySQL", delay: 0, duration: 0 },
					{
						icon: <SiPostgresql size={40} />,
						name: "PostgreSQL",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiMongodb size={40} />,
						name: "MongoDB",
						delay: 0,
						duration: 0,
					},
					{ icon: <SiRedis size={40} />, name: "Redis", delay: 0, duration: 0 },
					{
						icon: <SiFirebase size={40} />,
						name: "Firebase",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiMicrosoftsqlserver size={40} />,
						name: "SSMS",
						delay: 0,
						duration: 0,
					},
				],
			},
			{
				title: "Machine Learning & AI",
				logos: [
					{
						icon: <SiTensorflow size={40} />,
						name: "TensorFlow",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiPytorch size={40} />,
						name: "PyTorch",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiScikitlearn size={40} />,
						name: "Scikit-learn",
						delay: 0,
						duration: 0,
					},
					{ icon: <SiKeras size={40} />, name: "Keras", delay: 0, duration: 0 },
					{
						icon: <SiJupyter size={40} />,
						name: "Jupyter",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiPandas size={40} />,
						name: "Pandas",
						delay: 0,
						duration: 0,
					},
					{ icon: <SiNumpy size={40} />, name: "NumPy", delay: 0, duration: 0 },
					{
						icon: <SiOpencv size={40} />,
						name: "OpenCV",
						delay: 0,
						duration: 0,
					},
					{
						icon: <FaChartBar size={40} />,
						name: "Seaborn",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiPlotly size={40} />,
						name: "Plotly",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiDatabricks size={40} />,
						name: "Databricks",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiMlflow size={40} />,
						name: "MLflow",
						delay: 0,
						duration: 0,
					},
				],
			},
			{
				title: "DevOps & Cloud",
				logos: [
					{ icon: <FaGitAlt size={40} />, name: "Git", delay: 0, duration: 0 },
					{
						icon: <FaGithub size={40} />,
						name: "GitHub",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiJenkins size={40} />,
						name: "Jenkins",
						delay: 0,
						duration: 0,
					},
					{ icon: <FaAws size={40} />, name: "AWS", delay: 0, duration: 0 },
					{
						icon: <SiGooglecloud size={40} />,
						name: "GCP",
						delay: 0,
						duration: 0,
					},
					{
						icon: <SiAzuredevops size={40} />,
						name: "Azure",
						delay: 0,
						duration: 0,
					},
				],
			},
		];
		const updatedCategories = techCategories.map((category) => {
			const updatedLogos = category.logos.map((logo) => ({
				...logo,
				delay: Math.random() * 2,
				duration: 2 + Math.random() * 3,
			}));
			return { ...category, logos: updatedLogos };
		});

		setCategories(updatedCategories);
	}, []);

	return (
		<div className="tech-logos-container">
			<h3 className="tech-logos-title shiny-text">Technologies I Work With</h3>

			<div className="tech-categories-scroll">
				<div className="tech-categories-row">
					{categories.map((category, categoryIndex) => (
						<div key={categoryIndex} className="tech-category">
							<h4 className="tech-category-title">{category.title}</h4>
							<div className="tech-logos-grid">
								{category.logos.map((logo, logoIndex) => (
									<Logo
										key={`${categoryIndex}-${logoIndex}`}
										icon={logo.icon}
										name={logo.name}
										delay={logo.delay}
										duration={logo.duration}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechLogos;
