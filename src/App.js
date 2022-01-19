import "./App.css";
import Header from "../src/components/Header"
import FicheThemes from "./components/FicheThemes/FicheThemes";

function App() {
	return (
		<div className="App font-open-sans">
			<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
				<Header text="ManoMano & Les Bricodeurs" />
			</div>
			<FicheThemes />
		</div>
	);
}

export default App;
