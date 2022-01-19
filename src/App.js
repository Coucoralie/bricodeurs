import "./App.css";
import NavBarTop from "./components/navigation/NavBarTop";
import HeaderOneCenter from "./components/headers/HeaderOneCenter";
import HeaderThreeCenter from "./components/headers/HeaderThreeCenter";
import HeaderTwoLeft from "./components/headers/HeaderTwoLeft";

function App() {
	return (
		<div className="relative h-full App font-open-sans bg-slate-50">
			<NavBarTop />
			<section className="bg-[url('./assets/images/gradient.png')] bg-cover w-full bg-no-repeat bg-center">
				<div className="flex flex-col items-center justify-center w-full max-w-3xl min-h-screen pt-32 mx-auto md:pt-0">
					<HeaderOneCenter text="Mano Lens helps you find products in our catalog, from inspiration images." />
					<div className="flex flex-col w-full max-w-2xl mt-12 gap-y-8">
						<HeaderThreeCenter text="This tool is made for both consumers and professionals customers of ManoMano." />
						<HeaderThreeCenter text="Scroll this page to discover it. Enjoy!" />
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center w-full px-4 pt-32 mx-auto gap-y-8 gap-x-12 lg:flex-row lg:px-12 pb-36 md:pt-0">
				<div className="w-full max-w-2xl lg:pr-12">
					<HeaderTwoLeft text="People living together can collect inspirational images and easily find references in the catalogue." />
				</div>
				<div className="w-full h-auto px-16 py-12 bg-slate-200 bg-opacity-40 rounded-xl">
					test
				</div>
			</section>
			<section className="flex flex-col items-center w-full px-4 pt-32 mx-auto gap-y-8 gap-x-12 lg:flex-row lg:px-12 pb-36 md:pt-0">
				<div className="w-full max-w-2xl lg:pr-12">
					<HeaderTwoLeft text="Professionals save time in finding fashionable references on social networks like Pinterest." />
				</div>
				<div className="w-full h-auto px-16 py-12 bg-slate-200 bg-opacity-40 rounded-xl">
					test
				</div>
			</section>
		</div>
	);
}

export default App;
