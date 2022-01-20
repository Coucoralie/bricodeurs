import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBarTop from "./components/navigation/NavBarTop";
import FicheThemes from "./components/FicheThemes/FicheThemes";
import FicheSalon from "./components/FicheProduit/FicheSalon";
import FicheCuisine from "./components/FicheProduit/FicheCuisine";
import FicheChambre from "./components/FicheProduit/FicheChambre";


function App() {
	return (
		<div>
		<div className="relative h-full App font-open-sans bg-slate-50">
			<NavBarTop />
		</div>

		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/themes' element={<FicheThemes />}/>
			<Route path='/salon' element={<FicheSalon />}/>
		</Routes>
		</div>
	);
}

export default App;
