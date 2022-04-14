import { motion } from "framer-motion";
import React from "react";

//x: 0 will put it center of screen
const animations = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

const AnimatedText = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial="exit"
			animate="animate"
			exit="exit"
			transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedText;
