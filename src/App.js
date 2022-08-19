import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

	// console.log('asd',process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE);

	const {
		currentThemeMode,
		currentPalette,
		currentDarkBgColor,
		currentLightBgColor,
	} = useStateContext();

	const [bgColor, setBgColor] = useState(
		currentThemeMode === 'dark' ? currentDarkBgColor : currentLightBgColor
	);

	useEffect(() => {
		setBgColor(
			currentThemeMode === 'dark' ? currentDarkBgColor : currentLightBgColor
		);
	}, [
		currentThemeMode,
		currentPalette,
		currentDarkBgColor,
		currentLightBgColor,
	]);
	// const notify = () => toast("Wow so easy !");
	return (
		<div className="dark flex flex-col h-screen justify-between" style={{ background: bgColor, minHeight: '100vh' }}>
			
			<BrowserRouter>
			{/* <button onClick={notify}>Notify !</button> */}
			<ToastContainer closeButton={true}  pauseOnFocusLoss={false} 
			theme={currentThemeMode === 'dark' ? 'dark' : 'colored'}
			/>
				<Navbar />
				<div style={{ height: 80 }}></div>

				<Drawer />
				<TopArrow
					bgColor={
						currentThemeMode === 'light' ? currentPalette.color : 'black'
					}
				/>

				<Routes className="mt-5 bg-red-400">
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
