import { motion } from "framer-motion";
import "./Loader.css";

const Loader = () => {
	return (
		<div className="loader-container">
			<motion.div
				className="loader"
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.5,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
			>
				<svg width="100" height="100" viewBox="0 0 100 100">
					<motion.path
						d="M10,50 A40,40 0 1,1 90,50 A40,40 0 1,1 10,50"
						fill="none"
						stroke="url(#gradient)"
						strokeWidth="5"
						strokeLinecap="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#4f46e5" />
							<stop offset="100%" stopColor="#10b981" />
						</linearGradient>
					</defs>
				</svg>
			</motion.div>
			<motion.p
				className="loader-text"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				Loading Portfolio...
			</motion.p>
		</div>
	);
};

export default Loader;
