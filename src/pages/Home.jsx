import React, { useState } from "react";
import "../App.css";
import Carousel from "../components/Carousel/Carousel";
import { CarouselData } from "../components/Carousel/CarouselData";
import HeaderOneCenter from "../components/headers/HeaderOneCenter";
import HeaderTwoCenter from "../components/headers/HeaderTwoCenter";
import HeaderThreeCenter from "../components/headers/HeaderThreeCenter";
import Upload from "../components/upload/Upload";
import ModalUpload from "../components/modal/ModalUpload";
import InspoCards from "../inspoCards/InspoCards";
import { motion } from "framer-motion";
import { FadeInTwo } from "../Animate";

function Home() {
	const [showModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	return (
<FadeInTwo>
		<div className="relative h-full App font-open-sans bg-slate-50">
			{showModal ? (
				<div className="fixed inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-slate-500 bg-opacity-30">
					<ModalUpload handleShowModal={handleShowModal} />
				</div>
			) : null}
			<section className="bg-[url('./assets/images/gradient.png')] bg-cover w-full bg-no-repeat bg-center">
				<div className="flex flex-col items-center justify-center w-full min-h-screen pt-32 mx-auto mt-12 max-w-7xl md:pt-0">
					<HeaderOneCenter text="Mano Lens helps you find products in our catalog, from inspiration images." />
					<div className="flex flex-col w-full max-w-2xl mt-12 gap-y-8">
						<HeaderThreeCenter text="This tool is made for both consumers and professionals customers of ManoMano." />
						<HeaderThreeCenter text="Start by uploading your image !" />
					</div>
					<Upload handleShowModal={handleShowModal} />
				</div>
			</section>
			<div className="flex flex-col w-full h-full mx-auto">
				<HeaderTwoCenter text="Do you need some inspiration ?" />
				<HeaderThreeCenter text="Find supplies from these images on ManoMano." />
				<Carousel slides={CarouselData} />
			</div>
			<section className="flex flex-col items-center justify-center">
				<InspoCards />
			</section>
		</div>
		</FadeInTwo>
	);
}

export default Home;
