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
			name: "The Team",
			url: "#",
		},
	];

	return (
		<div className="fixed top-0 z-50 flex-row items-center justify-between hidden w-full h-20 px-16 bg-opacity-0 border border-b border-gray-200 bg-slate-50 lg:flex">
			<div className="absolute inset-0 bg-white bg-opacity-25 backdrop-filter backdrop-blur"></div>
			<div className="z-10 flex flex-row">
				<p className="pt-1 mr-6 text-xs text-blue-900">
					<span className="mr-2 text-lg font-bold">Mano Lens</span> by
				</p>
				<img className="w-36" src={ManoLogo} alt="ManoMano Logo" />
			</div>
			<div className="z-10 flex flex-row justify-between">
				{menus.map((el) => (
					<a
						key={el.name}
						className="px-6 py-3 mx-2 transition-all duration-150 ease-out border border-opacity-0 rounded-md cursor-pointer text-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-50 hover:border-slate-200"
					>
						<button>{el.name}</button>
					</a>
				))}
				<div className="flex flex-row items-center ml-6">
					<ButtonPrimary text={"Hire us !"} />
				</div>
			</div>
		</div>
	);
};

export default NavBarTop;
