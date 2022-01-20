import React from "react";

const InspoCards = () => {
	const inspos = [
		{
			name: "Kitchen",
		},
		{
			name: "Bathroom",
		},
		{
			name: "Garden",
		},
		{
			name: "Bedrooms",
		},
		{
			name: "Living Room",
		},
		{
			name: "Office",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{inspos.map((el) => (
				<div>{el.name}</div>
			))}
		</div>
	);
};

export default InspoCards;
