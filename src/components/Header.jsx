import React from "react";

const Header = function Header({ text }) {
	return (
		<div>
			<h1 className="text-3xl font-semibold text-sky-500">{text}</h1>
		</div>
	);
};

export default Header;
