import React from "react";

const HeaderThreeCenter = ({ text }) => {
	return (
		<div className="w-full">
			<h2 className="px-12 text-2xl font-light leading-snug text-center text-blue-900 lg:text-3xl">
				{text}
			</h2>
		</div>
	);
};

export default HeaderThreeCenter;
