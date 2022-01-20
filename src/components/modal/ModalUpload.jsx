import React, { useState } from "react";
import image1 from "../../assets/images/cup-iso-color.png";
import image2 from "../../assets/images/cup-iso-color.png";
import image3 from "../../assets/images/cup-iso-color.png";

const ModalUpload = ({ handleShowModal }) => {
	const [selected, setSelected] = useState("");

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
			name: "Salon.png",
			img: image1,
			param: "salon_1",
			selected: false,
			size: "1.12 Mb",
		},
		{
			name: "Salle_de_bain.png",
			img: image2,
			param: "salle-de-bain",
			selected: false,
			size: "1.24 Mb",
		},
	];

	function handleSelection(item) {
		setSelected(item.name);
	}

	return (
		<div className="z-50 flex flex-row items-center justify-center w-full h-full max-w-3xl border rounded-lg max-h-96 border-slate-200 bg-slate-50">
			<div className="w-1/4 border-r h-96 border-slate-200">
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
								selected === el.name
									? "z-10 flex flex-col items-center w-full p-4 rounded-lg bg-blue-400 text-white"
									: "z-10 flex flex-col items-center w-full p-4 rounded-lg hover:bg-slate-200"
							}
						>
							<img className="w-20" src={el.img} alt="" />
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
						Upload
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalUpload;
