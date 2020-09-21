import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import MainState from "./context/MainState";

function App() {
	return (
		<MainState>
			<div className="App">
				<Header />
				<Home />
			</div>
		</MainState>
	);
}

export default App;
