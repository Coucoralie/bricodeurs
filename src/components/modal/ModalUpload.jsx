import React, { useState } from "react";
import { cuisine } from "../../assets/images/index";
import salon from "../../assets/images/Salon_standart.jpeg";

const ModalUpload = ({ handleShowModal }) => {
	const [selected, setSelected] = useState({ name: "", path: "" });

	const modalMenus = [
		{
			name: "Desktop",
			isActive: true,
		},
		{
			name: "Downloads",
			isActive: false,
		},
		{
			name: "Images",
			isActive: false,
		},
		{
			name: "iCloud Drive",
			isActive: false,
		},
	];

	const images = [
		{
			name: "Cuisine.png",
			img: cuisine,
			path: "/cuisine",
			selected: false,
			size: "1.12 Mb",
		},
		{
			name: "Salon.png",
			img: salon,
			path: "/salon",
			selected: false,
			size: "1.24 Mb",
		},
	];

	function handleSelection(item) {
		let nam = item.name;
		let url = item.path;
		setSelected({ name: nam, path: url });
	}

	return (
		<div className="z-40 flex flex-row items-center justify-center w-full h-full max-w-3xl border rounded-lg max-h-96 border-slate-200 bg-slate-50">
			<div className="z-40 w-1/4 border-r h-96 border-slate-200">
				<div className="flex flex-col px-5 gap-y-2">
					<p className="py-6 font-medium text-left text-gray-500">
						Local Files
					</p>
					{modalMenus.map((el) => (
						<div
							key={el.name}
							className={
								el.isActive
									? "px-4 py-3 rounded-lg bg-slate-200"
									: "px-4 py-3 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-all duration-75 ease-in-out text-slate-600"
							}
						>
							<p className="text-left">{el.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-start w-3/4 h-full">
				<div className="grid items-start justify-between h-full grid-cols-3 px-8 py-10 gap-x-3">
					{images.map((el) => (
						<div
							onClick={() => handleSelection(el)}
							key={el.name}
							className={
								selected.name === el.name
									? "z-10 flex flex-col items-center w-full p-4 rounded-lg bg-blue-400 text-white"
									: "z-10 flex flex-col items-center w-full p-4 rounded-lg hover:bg-slate-200"
							}
						>
							<img className="h-20" src={el.img} alt="" />
							<p className="mt-2 text-sm">{el.name}</p>
							<p className="mt-1 text-xs">{el.size}</p>
						</div>
					))}
				</div>
				<div className="flex flex-row justify-end w-full px-8 py-5 border-t h-1/4 border-slate-200 gap-x-4">
					<button
						onClick={() => handleShowModal()}
						className="px-6 py-2 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-800"
					>
						Cancel
					</button>
					<button className="px-6 py-2 text-white transition-all duration-75 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-800">
						<a href={selected.path}>Upload</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalUpload;
