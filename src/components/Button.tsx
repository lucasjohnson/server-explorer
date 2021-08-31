import React from 'react';

interface ButtonProps {
	label: string;
	setOnClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, setOnClick }) => (
	<button
		className="button"
		onClick={setOnClick}
	>
		{label}
	</button>
);

export default Button;
