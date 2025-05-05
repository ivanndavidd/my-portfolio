import { FaGraduationCap, FaBook } from "react-icons/fa";
import "./Education.css";

const Education = () => {
	const educationData = [
		{
			degree: "Master's degree in Informatics System Technology",
			field: "Business Intelligence",
			university: "President University",
			location: "Cikarang, Indonesia",
			period: "Sep 2022 - Oct 2023",
			gpa: "3.56/4.00 (Very Satisfactory)",
			thesis:
				"PCA, Hierarchical Clustering, Isolation Forest for Job Vacancies Anomaly Detection",
			courses: [
				"Software Development",
				"Machine Learning",
				"Data Quality",
				"Security System",
				"Computer Vision",
				"Information Retrieval System",
				"Analysis Algorithms",
				"Modelling and Simulation",
				"Data Mining",
				"Information Extraction",
				"Big Data Analysis",
				"Ethical Hacking and Cybersecurity",
				"Intelligence of Search Engine",
				"Voice and Image Recognition",
			],
		},
		{
			degree: "Bachelor's degree in Electrical Engineering",
			field: "Control and Power System",
			university: "President University",
			location: "Cikarang, Indonesia",
			period: "Oct 2018 - Oct 2022",
			gpa: "3.53/4.00 (Very Satisfactory)",
			thesis:
				"Designing the Prototype of a Filling Machine with a Weighing Mode to Maintain the Accuracy",
			courses: [
				"Digital Control System",
				"Feedback and Control System",
				"Fuzzy Logic and Neural Networks",
				"Object-Oriented Programming",
				"Electrical Power Engineering",
				"System Modelling and Identification",
				"Robotic Design",
				"Engineering Programming",
				"Digital System Processing",
				"Signals and Systems",
			],
		},
	];

	return (
		<section className="education-section section">
			<div className="container">
				<h2 className="section-title">
					<FaGraduationCap className="section-icon" />
					Education
				</h2>

				<div className="horizontal-timeline-container">
					<div className="horizontal-timeline">
						{/* Removed timeline-line div */}

						{educationData.map((edu, index) => (
							<div key={index} className="timeline-item">
								{/* Removed timeline-marker div */}

								<div className="timeline-card">
									<h3 className="timeline-degree">{edu.degree}</h3>
									<span className="timeline-field">{edu.field}</span>

									<div className="timeline-divider"></div>

									<div className="timeline-university">
										<h4>{edu.university}</h4>
										<p>{edu.location}</p>
									</div>

									<div className="timeline-period">{edu.period}</div>

									<div className="timeline-details">
										<p>
											<strong>GPA:</strong> {edu.gpa}
										</p>
										<p>
											<strong>Thesis:</strong> {edu.thesis}
										</p>
									</div>

									<div className="timeline-courses">
										<h5>
											<FaBook /> Relevant Coursework:
										</h5>
										<div className="courses-scroll">
											{edu.courses.map((course, idx) => (
												<span key={idx} className="course-badge">
													{course}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}

						{/* Tambahkan div kosong di akhir timeline untuk memberikan space */}
						<div className="timeline-end-spacer"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
