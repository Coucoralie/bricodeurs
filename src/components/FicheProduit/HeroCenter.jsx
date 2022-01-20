import React from "react";

const HeroCenter = ({ text }) => {
	return (
		<div className="w-full ">
			<h1 className="px-3 text-3xl font-semibold leading-normal text-blue-900 lg:text-4xl xl:text-6xl"><span>Your Inspiration</span></h1>
			<h3 className="px-3 mt-3 leading-normal text-blue-900 fon-t-semibold text-1xl lg:text-2xl xl:text-4xl">
				<span className="leading-normal">{text}</span>
			</h3>
		</div>
	);
};

export default HeroCenter;
