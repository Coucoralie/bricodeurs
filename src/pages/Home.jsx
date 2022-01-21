import React, { useState } from "react";
import "../App.css";
import Carousel from "../components/Carousel/Carousel";
import { CarouselData } from "../components/Carousel/CarouselData";
import HeaderOneCenter from "../components/headers/HeaderOneCenter";
import HeaderOneLeft from "../components/headers/HeaderOneLeft";
import HeaderTwoCenter from "../components/headers/HeaderTwoCenter";
import HeaderThreeCenter from "../components/headers/HeaderThreeCenter";
import HeaderThreeLeft from "../components/headers/HeaderThreeLeft";
import Upload from "../components/upload/Upload";
import ModalUpload from "../components/modal/ModalUpload";
import InspoCards from "../inspoCards/InspoCards";
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
					<HeaderOneCenter text="ManoLens helps you find products in our catalog, from inspiration images." />
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
			<section
				id="consumers"
				className="flex flex-row w-full min-h-screen px-12 mx-auto mt-36"
			>
				<div className="sticky top-0 w-1/2">
					<HeaderOneLeft text="Built for consumers" />
					<div className="w-2/3 pr-12 mt-4 mb-24 ml-4 ">
						<HeaderThreeLeft text="Social networks and influencers are now the main sources of inspiration for consumers." />
					</div>
					<div className="mt-12 ml-4 mr-24">
						<HeaderThreeLeft text="Use cases :" />
						<div className="mt-12 mb-4">
							<HeaderThreeLeft text="- Social network inspirations I found" />
						</div>
						<div className="mt-12 mb-4">
							<HeaderThreeLeft text="- Get supplies references from physical places I went" />
						</div>
					</div>
				</div>
				<div className="grid w-1/2 min-h-screen grid-cols-3 grid-rows-2 gap-4 overflow-hidden">
					<div className="rounded-xl row-span-2 bg-left bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1533228195795-ee0060754ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')]" />
					<div className="rounded-xl col-start-2 bg-center bg-cover col-span-2 bg-[url('https://images.unsplash.com/photo-1452993912631-49cff82efb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2164&q=80')]" />
					<div className="rounded-xl col-start-2 bg-cover bg-center bg-no-repeat col-span-2 bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')]" />
				</div>
			</section>
			<section
				id="suppliers"
				className="flex flex-row w-full min-h-screen px-12 pb-24 mx-auto mt-36"
			>
				<div className="sticky top-0 w-1/2">
					<HeaderOneLeft text="Built for professionals" />
					<div className="w-2/3 mt-4 mb-24 ml-4">
						<HeaderThreeLeft text="As a professional, you need to be on top of the trends to differentiate yourself from the competition." />
					</div>
					<div className="mt-12 ml-4 mr-24">
						<HeaderThreeLeft text="Use cases :" />
						<div className="mt-12 mb-4">
							<HeaderThreeLeft text="- Social network inspirations I found" />
						</div>
						<div className="mt-12 mb-4">
							<HeaderThreeLeft text="- Get supplies references from my customers images" />
						</div>
						<div className="mt-12 mb-4">
							<HeaderThreeLeft text="- Get supplies references from showroom I went" />
						</div>
					</div>
				</div>
				<div className="grid w-1/2 min-h-screen grid-cols-3 grid-rows-2 gap-4 overflow-hidden">
					<div className="rounded-xl row-span-2 bg-left bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/originals/11/23/b5/1123b55bae07bf418ee526afed9fa79f.jpg')]" />
					<div className="rounded-xl col-start-2 bg-center bg-cover col-span-2 bg-[url('https://marseille.love-spots.com/wp-content/uploads/2019/01/Deco-mobilier-Marseille_Edward_Love-Spots_06-1280x768.jpg')]" />
					<div className="rounded-xl col-start-2 bg-cover bg-center bg-no-repeat col-span-2 bg-[url('https://www.arper.com/media/userfiles/images/2013-08-13316-67.jpg')]" />
				</div>
			</section>
		</div>
		</FadeInTwo>
	);
}

export default Home;
