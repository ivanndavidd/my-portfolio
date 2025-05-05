import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <motion.section
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <div className="hero-image-container floating-animation">
          <div className="hero-image-wrapper">
            <img
              src="/profile-image.jpg"
              alt="Profile"
              className="hero-image"
            />
            <div className="hero-image-backdrop"></div>
          </div>
        </div>
        {/* </motion.div> */}

        <div className="hero-text">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Electrical & Computer Engineer
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            <span className="gradient-text">Fullstack Engineer</span> | AI &
            Data Science
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            Experienced in software development, machine learning, and
            electrical engineering with a strong background in Data Science,
            Software Development, and AI.
          </motion.p>

          <motion.div className="hero-social" variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/ivann-davidd"
              className="social-icon linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ivanndavidd"
              className="social-icon github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:ivann.davidd11@gmail.com"
              className="social-icon email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="/contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="/experience" className="btn btn-outline">
              View Experience
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
