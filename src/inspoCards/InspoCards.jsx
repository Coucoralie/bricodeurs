import React from "react";
import { cuisine } from "../assets/images/index";

const InspoCards = () => {
	const inspos = [
		{
			name: "Kitchens",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg: cuisine,
		},
		{
			name: "Bathrooms",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg:
				"https://images.unsplash.com/photo-1613849925502-7b0f95cbdda0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
		},
		{
			name: "Gardens",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg:
				"https://images.unsplash.com/photo-1611282712338-63a58e27980a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
		},
		{
			name: "Bedrooms",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg:
				"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "Living Rooms",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg:
				"https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "Home Offices",
			path: "#",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			srcImg:
				"https://images.unsplash.com/photo-1618222104927-33e0bd5f8dae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];

	return (
		<div className="grid w-full max-w-5xl grid-cols-1 gap-10 py-12 md:grid-cols-3">
			{inspos.map((el) => (
				<div
					key={el.name}
					className="flex flex-col p-8 transition-all duration-200 ease-in-out bg-white border shadow-lg cursor-pointer rounded-2xl shadow-slate-200 border-slate-100 hover:shadow-slate-200 hover:shadow-xl hover:scale-105"
				>
					<div>
						<img
							className="object-cover w-full h-40 rounded-xl"
							src={el.srcImg}
							alt={el.name}
						/>
					</div>
					<div className="pt-3">
						<div className="mt-5 text-xl font-semibold text-blue-800">
							{el.name}
						</div>
						<div className="mt-2 text-slate-600">{el.text}</div>
						<div className="mt-4">
							<a href={el.path} className="text-sm text-blue-500 underline">
								See supplies
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default InspoCards;
