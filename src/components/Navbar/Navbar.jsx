import React, { useState, useRef, useEffect } from 'react';
import { navLinks } from '../../data/dummy';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
// import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';
import useWindowSize from '../../hooks/useWindowSize';

function MenuIcon({ handleChange, checkRef }) {
	return (
		<>
			<input type="checkbox" ref={checkRef} id="hi" onChange={handleChange} />
			<label className="menu" htmlFor="hi">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</label>
		</>
	);
}

const Navbar = () => {
	const checkRef = useRef(null);

	const { currentThemeMode, currentPalette } = useStateContext();

	const { width, height } = useWindowSize();

	const [menuState, setMenuState] = useState(false);

	const handleMenuState = (e) => {
		e.target.checked ? setMenuState(true) : setMenuState(false);
	};

	useEffect(() => {
		if (width > 640) {
			// console.log('menustate true');
			setMenuState(true);
		} else {
			// console.log('menustate false');
			setMenuState(false);
		}
	}, [width]);

	const navLinkClasses = `my-auto mx-4  py-2 flex justify-center font-semibold
      hover:animate-pulsehover:cursor-pointer hover:underline 
      underline-offset-4 decoration-4 hover:decoration-2 decoration-inherit
     ${width < 640 && 'py-7 border '}
     `;

	return (
		<div
			className="container-fluid  w-100 drop-shadow-xl
        sm:px-20 px-2
        "
			style={{
				background:
					currentThemeMode === 'light' ? currentPalette.color : 'black',
			}}
		>
			<div
				className=" text-white py-3 px-2
            flex flex-col justify-center sm:flex-row sm:justify-between
            "
			>
				<div className="bg-yellow p-1 my-auto">LOGO</div>
				{width < 640 && (
					<MenuIcon
						checkRef={checkRef}
						className="justify-self-end bg-black"
						handleChange={handleMenuState}
					/>
				)}
				{/* <div
					className={` flex flex-col sm:flex-row ${
						( width<640) && 'mobileMenu'
					}
                        `}
				></div> */}
				{menuState && (
				<div
					className={` sm:flex sm:flex-row sm:justify-evenly ${
						width < 640 && 'mobileMenu'
					} `}
				>
					{navLinks.map((link, index) => (
						<NavLink
							item={link.name}
							to={link.href}
							className={({ isActive }) =>
								isActive ? ' underline ' + navLinkClasses : navLinkClasses
							}
							style={{
								transition: '.2s ease-out',
							}}
							key={link.name}
						>
							{link.name.toUpperCase()}
						</NavLink>
					))}
				</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
