import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Resume from "./pages/resume/index";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />} exact />
					{/* Specify the element */}
					<Route path="/resume" element={<Resume />} exact />
					<Route path="/portfolio" element={<Portfolio />} exact />
					<Route path="/contact" element={<Contact />} exact />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
