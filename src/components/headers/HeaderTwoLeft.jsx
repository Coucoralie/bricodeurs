import React from "react";

const HeaderTwoLeft = ({ text }) => {
	return (
		<div className="w-full">
			<h1 className="text-xl font-semibold leading-normal text-left text-blue-900 lg:text-2xl xl:text-3xl">
				<span className="leading-normal">{text}</span>
			</h1>
		</div>
	);
};

export default HeaderTwoLeft;
