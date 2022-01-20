import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import { CarouselData } from "./components/Carousel/CarouselData";
import NavBarTop from "./components/navigation/NavBarTop";
import HeaderOneCenter from "./components/headers/HeaderOneCenter";
import HeaderThreeCenter from "./components/headers/HeaderThreeCenter";
import Upload from "./components/upload/Upload";
import ModalUpload from "./components/modal/ModalUpload";

function App() {
	const [showModal, setShowModal] = useState(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="relative h-full App font-open-sans bg-slate-50">
			{showModal ? (
				<div className="fixed inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-slate-500 bg-opacity-30">
					<ModalUpload handleShowModal={handleShowModal} />
				</div>
			) : null}
			<NavBarTop />
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
			<div>
				<Carousel slides={CarouselData} />
			</div>
		</div>
	);
}

export default App;
