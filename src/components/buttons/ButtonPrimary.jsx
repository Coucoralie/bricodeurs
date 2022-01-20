import React from "react";

const ButtonPrimary = ({ text }) => {
	return (
		<button
			className="px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all duration-75 ease-in-out bg-blue-800 rounded-md hover:bg-blue-900"
			type="button"
		>
			{text}
		</button>
	);
};

export default ButtonPrimary;
