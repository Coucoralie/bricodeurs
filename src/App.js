import "./App.css";
import Home from "./pages/Home";
import NavBarTop from "./components/navigation/NavBarTop";

function App() {
	return (
		<div className="relative h-full App font-open-sans bg-slate-50">
			<NavBarTop />

			<Home />
		</div>
	);
}

export default App;
