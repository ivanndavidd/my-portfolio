import {
	FaGraduationCap,
	FaBook,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import "./Education.css";

const Education = () => {
	const timelineRef = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [maxScroll, setMaxScroll] = useState(0);
	const coursesScrollRefs = useRef<(HTMLDivElement | null)[]>([]);
	const coursesScrollThumbRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [isMobile, setIsMobile] = useState(false);

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

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	const scrollLeft = () => {
		if (!timelineRef.current) return;

		const scrollAmount = isMobile ? 300 : 600;
		const currentScroll = timelineRef.current.scrollLeft;

		timelineRef.current.scrollTo({
			left: Math.max(currentScroll - scrollAmount, 0),
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		if (!timelineRef.current) return;

		if (isMobile) {
			// Untuk mobile, scroll ke item berikutnya
			const itemWidth = window.innerWidth <= 480 ? 320 : 400;
			const currentItem = Math.floor(
				timelineRef.current.scrollLeft / itemWidth
			);
			const nextItem = currentItem + 1;

			timelineRef.current.scrollTo({
				left: nextItem * itemWidth,
				behavior: "smooth",
			});
		} else {
			const scrollAmount = 600;
			const currentScroll = timelineRef.current.scrollLeft;

			timelineRef.current.scrollTo({
				left: currentScroll + scrollAmount,
				behavior: "smooth",
			});
		}
	};

	const scrollToEnd = () => {
		if (!timelineRef.current) return;

		timelineRef.current.scrollTo({
			left: timelineRef.current.scrollWidth,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const updateScrollInfo = () => {
			if (!timelineRef.current) return;

			const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
			setScrollPosition(scrollLeft);
			setMaxScroll(scrollWidth - clientWidth);
		};

		updateScrollInfo();

		const timeline = timelineRef.current;
		if (timeline) {
			timeline.addEventListener("scroll", updateScrollInfo);
			window.addEventListener("resize", updateScrollInfo);
		}

		return () => {
			if (timeline) {
				timeline.removeEventListener("scroll", updateScrollInfo);
				window.removeEventListener("resize", updateScrollInfo);
			}
		};
	}, []);

	const updateScrollThumb = (index: number) => {
		const scrollContainer = coursesScrollRefs.current[index];
		const scrollThumb = coursesScrollThumbRefs.current[index];

		if (!scrollContainer || !scrollThumb) return;

		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
		const scrollPercent = scrollLeft / (scrollWidth - clientWidth);
		const thumbWidth = (clientWidth / scrollWidth) * 100;
		const thumbPosition = scrollPercent * (100 - thumbWidth);

		// Update lebar dan posisi thumb
		scrollThumb.style.width = `${thumbWidth}%`;
		scrollThumb.style.transform = `translateX(${thumbPosition}%)`;
	};

	// Setup event listeners untuk scrolling pada courses
	useEffect(() => {
		coursesScrollRefs.current.forEach((scrollRef, index) => {
			if (!scrollRef) return;

			const handleScroll = () => updateScrollThumb(index);

			scrollRef.addEventListener("scroll", handleScroll);

			// Initial update
			updateScrollThumb(index);

			return () => {
				scrollRef.removeEventListener("scroll", handleScroll);
			};
		});
	}, []);

	const isAtEnd = scrollPosition >= maxScroll - 10;

	return (
		<section className="education-section section">
			<div className="container">
				<h2 className="section-title">
					<FaGraduationCap className="section-icon" />
					Education
				</h2>

				<div className="timeline-navigation">
					<div className="horizontal-timeline-container" ref={timelineRef}>
						<div className="horizontal-timeline">
							{educationData.map((edu, index) => (
								<div key={index} className="timeline-item">
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
											<div className="gradient-divider"></div>
											{/* <div className="courses-scroll"> */}
											<div className="courses-scroll-container">
												<div
													className="courses-scroll"
													ref={(el) => (coursesScrollRefs.current[index] = el)}
												>
													{edu.courses.map((course, idx) => (
														<span key={idx} className="course-badge">
															{course}
														</span>
													))}
												</div>
												<div className="courses-scroll-indicator">
													<div
														className="courses-scroll-thumb"
														ref={(el) =>
															(coursesScrollThumbRefs.current[index] = el)
														}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

							<div className="timeline-end-spacer"></div>
						</div>
					</div>

					{/* Tombol navigasi gaya Vercel */}
					<div className="vercel-nav-buttons">
						<button
							className="vercel-nav-button left"
							onClick={scrollLeft}
							aria-label="Scroll left"
							style={{ visibility: scrollPosition <= 0 ? "hidden" : "visible" }}
						>
							<FaChevronLeft />
						</button>
						{isAtEnd ? (
							<button
								className="vercel-nav-button right end-button"
								onClick={() =>
									timelineRef.current?.scrollTo({ left: 0, behavior: "smooth" })
								}
								aria-label="Scroll to beginning"
							>
								<FaChevronLeft />
							</button>
						) : (
							<button
								className="vercel-nav-button right"
								// onClick={scrollRight}
								onClick={isMobile ? scrollToEnd : scrollRight}
								aria-label="Scroll right"
								style={{
									visibility:
										scrollPosition >= maxScroll ? "hidden" : "visible",
								}}
							>
								<FaChevronRight />
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
