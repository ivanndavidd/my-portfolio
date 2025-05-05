import type React from "react";
import "./Avatar.css";

interface AvatarProps {
	src: string;
	alt: string;
	size?: number;
	className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
	src,
	alt,
	size = 40,
	className = "",
}) => {
	return (
		<div
			className={`avatar-container ${className}`}
			style={{
				width: `${size}px`,
				height: `${size}px`,
			}}
		>
			<img src={src || "/placeholder.svg"} alt={alt} className="avatar-image" />
		</div>
	);
};

export default Avatar;
