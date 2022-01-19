import React from "react";

const HeaderOneCenter = ({ text }) => {
	return (
		<div className="w-full">
			<h1 className="text-6xl font-semibold leading-snug text-blue-900">
				{text}
			</h1>
		</div>
	);
};

export default HeaderOneCenter;
