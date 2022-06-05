import React, { useState, useRef, useEffect, useCallback } from 'react';
import { navLinks } from '../../data/dummy';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
// import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';
import { breakpoints } from '../../data/dummy';
import useWindowSize from '../../hooks/useWindowSize';
import naruto from '../assets/naruto.png';
import { motion, useAnimation, AnimateSharedLayout } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
	const location = useLocation();

	const checkRef = useRef(null);
	const navRef = useRef(null);

	const { currentThemeMode, currentPalette } = useStateContext();
	const [scrollY, setScrollY] = useState(window.scrollY);
	const [scrollDirection, setScrollDirection] = useState('initial');

	const { width, height } = useWindowSize();
	const [navStyles, setNavStyles] = useState({
		background: 'transparent',
		color: currentThemeMode === 'light' ? 'black' : 'white',
		// animation: 'slideUp .4s ease-out',
	});

	const [menuState, setMenuState] = useState(false);

	const handleMenuState = (e) => {
		e.target.checked ? setMenuState(true) : setMenuState(false);
	};

	const navLogoVariants = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
		hidden: { opacity: 0, scale: 0 },
	};

	const handleScroll = useCallback(
		(e) => {
			console.log(
				'scrolled! Y:',
				scrollY,
				', win:',
				window.scrollY,
				', navHeight:',
				navRef.current.clientHeight
			);

			if (window.scrollY < navRef.current.clientHeight) {
				setScrollDirection('initial');
				setNavStyles({
					background: 'transparent',
					color: currentThemeMode === 'light' ? 'black' : 'white',
					// animation:"slideUp .3s ease-in "
				});
			} else if (scrollY <= window.scrollY) {
				//If Scrolled Down
				// console.log('down!');
				setScrollDirection('down');
				setNavStyles({
					background: 'transparent',
					color: currentThemeMode === 'light' ? 'black' : 'white',
					animation: 'slideUp .3s ease-in-out forwards',
				});
			} else {
				//Else Scrolled Up
				// console.log('up!');
				setScrollDirection('up');
				setNavStyles({
					background:
						currentThemeMode === 'light' ? currentPalette.color : 'black',
					color: 'white',
					animation: 'slideDown .3s ease-in forwards',
				});
			}

			setScrollY(window.scrollY);
		},
		[scrollY]
	);

	useEffect(() => {
		if (width > 640) {
			setMenuState(true);
		} else {
			setMenuState(false);
		}
	}, [width]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		if (scrollDirection === 'down') {
			setNavStyles((oldStyles) => ({
				...oldStyles,
				background: 'transparent',
				color: currentThemeMode === 'light' ? 'black' : 'white',
			}));
		} else if (scrollDirection === 'up') {
			setNavStyles((oldStyles) => ({
				...oldStyles,
				background:
					currentThemeMode === 'light' ? currentPalette.color : 'black',
				color: 'white',
			}));
		} else {
			setNavStyles((oldStyles) => ({
				...oldStyles,
				background: 'transparent',
				color: currentThemeMode === 'light' ? 'black' : 'white',
			}));
		}
	}, [currentPalette, currentThemeMode]);

	//	hover:underline underline-offset-4 decoration-4 hover:decoration-4 decoration-inherit
	const navLinkClasses = `my-auto mx-4  py-2 flex justify-center font-semibold navLink hover:cursor-pointer
	hover:animate-pulse 

     ${width < 640 && 'py-7 border '}
     `;
	const spring = {
		type: 'spring',
		stiffness: 500,
		damping: 30,
	};

	const [navItemHovered, setNavItemHovered] = useState(false);

	return (
		<nav
			ref={navRef}
			className="container-fluid  w-100 drop-shadow-xl
        sm:px-20 px-2 
        "
			style={{
				background: navStyles.background,
				color: navStyles.color,
				animation: navStyles.animation,
				position: 'fixed',
				zIndex: '999',
				width: '100vw',
				transition: 'all ease .4s',
				// currentThemeMode === 'light' ? currentPalette.color : 'black',
			}}
		>
			<div
				className="  py-3 px-2
            flex flex-col justify-center sm:flex-row sm:justify-between
            "
			>
				<motion.div
					variants={navLogoVariants}
					initial="hidden"
					animate="visible"
					className="bg-yellow p-1 my-auto"
				>
					<img className="object-contain h-12 w-30" src={naruto} alt="LOGO" />
				</motion.div>
				{width < 640 && (
					<MenuIcon
						checkRef={checkRef}
						className="justify-self-end bg-blue-400 text-red-800"
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
					<AnimateSharedLayout>
						<div
							className={` sm:flex sm:flex-row sm:justify-evenly ${
								width < 640 && 'mobileMenu'
							} `}
						>
							{navLinks.map((link, index) => (
								<NavLink
									item={link.name}
									to={link.href}
									// className={({ isActive }) =>
									// 	isActive ? ' underline ' + navLinkClasses : navLinkClasses
									// }
									className={navLinkClasses}
									style={{
										transition: '.2s ease-out',
										position: 'relative',
									}}
									key={link.name}
									onMouseEnter={() => setNavItemHovered(true)}
									onMouseLeave={() => setNavItemHovered(false)}
									// onClick={()=>{setNavItemHovered(old=>!old);  }}
								>
									
									{link.name.toUpperCase()}
									{ 
									location.pathname===link.href && 
									// navItemHovered &&
									 (
										<motion.div
											layoutId="navItem"
											style={{
												position:'absolute',
												top:   (width > 640)?'32px' : '0px' ,
												border:  (width > 640)?'0px' : `10px solid ${navStyles.color}`,
												background:(width > 640)? navStyles.color :'transparent',
												height: (width > 640)?'4px':'100%',
												width:'100%',
												// border: '10px solid '+navStyles.color
											}}
											// className='outline'
											initial={false}
											animate={{
												border: (width > 640)?'0px' : `4px solid ${navStyles.color}`,
												textDecoration: (width > 640) ? 'underline' : 'none',
												textDecorationThickness: (width > 640) ? '4px' : '0px',
											}}
											transition={spring}
										></motion.div>
									)}
								</NavLink>
							))}
						</div>
					</AnimateSharedLayout>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
