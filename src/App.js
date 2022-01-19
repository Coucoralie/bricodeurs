import "./App.css";
import NavBarTop from "./components/navigation/NavBarTop";
import HeaderOneCenter from "./components/headers/HeaderOneCenter";
import HeaderTwoCenter from "./components/headers/HeaderTwoCenter";

function App() {
	return (
		<div className="relative h-full App font-open-sans bg-gray-50">
			<NavBarTop />
			<div className="flex flex-col items-center justify-center w-full h-screen max-w-3xl mx-auto">
				<HeaderOneCenter text="Mano Lens helps you find products in our catalog from inspiration images." />
				<div className="w-full max-w-xl mt-12">
					<HeaderTwoCenter text="This tool is made for both consumers and professionals, scroll this page to discover it." />
				</div>
			</div>
			<div className="flex flex-col items-center h-screen">test</div>
			<div className="flex flex-col items-center h-screen">test</div>
			<div className="flex flex-col items-center h-screen">test</div>
			<div className="flex flex-col items-center h-screen">test</div>
			<div className="flex flex-col items-center h-screen">test</div>
		</div>
	);
}

export default App;
