import React from "react";

const HeaderOneCenter = ({ text }) => {
	return (
		<div className="w-full">
			<h1 className="px-3 text-3xl font-semibold leading-normal text-center text-blue-900 lg:text-4xl xl:text-6xl">
				<span className="leading-normal">{text}</span>
			</h1>
		</div>
	);
};

export default HeaderOneCenter;
