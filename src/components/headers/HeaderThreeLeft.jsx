import React from "react";

const HeaderThreeLeft = ({ text }) => {
	return (
		<div className="w-full">
			<h2 className="ml-0 text-2xl font-light leading-snug text-left text-blue-900 lg:text-3xl">
				{text}
			</h2>
		</div>
	);
};

export default HeaderThreeLeft;
