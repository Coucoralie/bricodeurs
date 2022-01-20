import "./App.css";
import Home from "./pages/Home";
import NavBarTop from "./components/navigation/NavBarTop";
import Carousel from "./components/Carousel/Carousel"


function App() {
	return (
		<div className="relative h-full App font-open-sans bg-slate-50">
			<NavBarTop />
			<Home />
      <Carousel slides={CarouselData} />
    </div>
	 )
};

export default App;
