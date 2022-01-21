import React from "react";
// import { Link } from "react-router-dom";
import {
	cuisine,
	cuisine2,
	cuisine3,
	cuisine4,
	cuisine5,
	cuisine6,
} from "../../assets/images/index";

const FicheThemes = () => {
	return (
		<div className="flex flex-col">
			<div className="grid grid-cols-2 gap-4">
				<div className="max-w-screen-xl p-5 sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded">
						{/* <Link to=""> */}
						<img className="w-full shadow-xl" src={cuisine} alt="cuisine" />
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl p-5 sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded">
						{/* <Link to=""> */}
						<img className="w-full shadow-xl" src={cuisine2} alt="cuisine" />
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="max-w-screen-xl p-5 sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded">
						{/* <Link to=""> */}
						<img className="w-full shadow-xl" src={cuisine3} alt="cuisine" />
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
							</p>
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl p-5 mx-right sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded mx-right">
						{/* <Link to=""> */}
						<img className="w-full shadow-xl" src={cuisine4} alt="cuisine" />
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl ">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="max-w-screen-xl p-5 sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded">
						{/* <Link to=""> */}
						<img
							className="w-full shadow-xl"
							src={cuisine5}
							alt="cuisine"
							className="img"
						/>
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl p-5 sm:p-10 md:p-16 ">
					<div className="flex flex-col max-w-xl overflow-hidden rounded">
						{/* <Link to=""> */}
						<img
							className="w-full shadow-xl"
							src={cuisine6}
							alt="cuisine"
							className="img"
						/>
						{/* </Link> */}
						<div className="relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white border border-gray-100 shadow-xl">
							<h2 className="text-2xl font-semibold text-sky-500">Kitchen</h2>
							<p className="text-sm font-semibold text-gray-500">
								It's simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived
								not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FicheThemes;
