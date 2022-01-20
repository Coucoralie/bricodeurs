import React from "react";

const Upload = ({ handleShowModal }) => {
	return (
		<div
			onClick={() => handleShowModal()}
			className="relative flex flex-col items-center justify-center px-24 py-12 mt-20 transition-all duration-200 ease-in-out border-2 border-dashed rounded-lg shadow-xl cursor-pointer hover:shadow-2xl border-slate-400"
		>
			<div className="absolute inset-0 bg-white rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-md" />
			<div className="z-0 mb-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="z-0 w-12 h-12 text-slate-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
					/>
				</svg>
			</div>
			<p className="z-10 text-xs font-semibold uppercase text-slate-600">
				Click here to upload your image
			</p>
		</div>
	);
};

export default Upload;
