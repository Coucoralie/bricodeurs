import React from "react";

const HeaderTwoCenter = ({ text }) => {
	return (
		<div className="w-full">
			<h2 className="text-2xl font-normal leading-snug text-blue-900">
				{text}
			</h2>
		</div>
	);
};

export default HeaderTwoCenter;
