import "./App.css";
import Header from "../src/components/Header";
import Carousel from "./components/Carousel/Carousel";
import { CarouselData } from './components/Carousel/CarouselData';


function App() {
	return (
		<div className="App font-open-sans">
			<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
				<Carousel slides={CarouselData}/>
			</div>
		</div>
	);
}

export default App;
