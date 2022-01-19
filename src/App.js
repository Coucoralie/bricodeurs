import "./App.css";
import Header from "../src/components/Header";

function App() {
	return (
		<div className="App font-open-sans">
			<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
				<Header text="ManoMano & Les Bricodeurs" />
			</div>
		</div>
	);
}

export default App;
