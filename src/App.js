import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBarTop from "./components/navigation/NavBarTop";
import FicheThemes from "./components/FicheThemes/FicheThemes"

function App() {
	return (
		<div>
		<div className="relative h-full App font-open-sans bg-slate-50">
			<NavBarTop />
			<Home />
		</div>

		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/themes' element={<FicheThemes />}/>
			<Route path='/' element={<Home />}/>
		</Routes>
		</div>
	);
}

export default App;
