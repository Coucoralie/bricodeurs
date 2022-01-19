/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import ManoLogo from "../../assets/images/logoManoMano-RGB-hor-color.png";
import ButtonPrimary from "../buttons/ButtonPrimary";

const NavBarTop = () => {
	const menus = [
		{
			name: "What is it?",
			url: "#",
		},
		{
			name: "For Consumers",
			url: "#",
		},
		{
			name: "For Professionals",
			url: "#",
		},
		{
			name: "Team",
			url: "#",
		},
	];

	return (
		<div className="fixed top-0 flex flex-row items-center justify-between w-full h-20 px-16 border border-b border-gray-300 bg-slate-100">
			<div className="flex flex-row">
				<img className="w-36" src={ManoLogo} alt="ManoMano Logo" />
			</div>
			<div className="flex flex-row justify-between">
				{menus.map((el) => (
					<a
						key={el.name}
						className="px-6 py-3 mx-2 transition-all duration-150 ease-in-out rounded-md cursor-pointer text-md text-slate-700 hover:text-slate-900 hover:bg-slate-200"
					>
						<button>{el.name}</button>
					</a>
				))}
				<div className="flex flex-row items-center ml-6">
					<ButtonPrimary text={"Start now !"} />
				</div>
			</div>
		</div>
	);
};

export default NavBarTop;
