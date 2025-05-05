import React from "react";
interface SectionTitleProps {
	children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
	return (
		<h2 className="text-3xl font-bold text-center">
			<span className="inline-block pb-2 border-b-4 border-blue-600">
				{children}
			</span>
		</h2>
	);
};

export default SectionTitle;
