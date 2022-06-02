import React, { useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';
// import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Drawer } from './components/Drawer';
import { TopArrow } from './components/TopArrow';

function App() {
	const {
		currentThemeMode, currentPalette, currentDarkBgColor, currentLightBgColor
	} = useStateContext();

	const bgColor = currentThemeMode==="dark"?currentDarkBgColor:currentLightBgColor

	return (
		<div className="dark" style={{background:bgColor, minHeight:"100vh"}}>
			
			<BrowserRouter>
				
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<Drawer/>
				

				<TopArrow bgColor={currentThemeMode === 'light' ? currentPalette.color : 'black'} />
				

			</BrowserRouter>

			

		</div>
	);
}

export default App;
