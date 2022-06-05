import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useStateContext } from '../../contexts/ContextProvider';
import Box from '@mui/material/Box';
import { customColors } from '../../data/dummy';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Divider from '@mui/material/Divider';
import './style.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PaletteIcon from '@mui/icons-material/Palette';


function Item({ color, isSelected, onClick, currentThemeMode }) {
	return (
		<li
			className={`colorCircle-item  ${currentThemeMode === 'light' && 'border '}
			hover:opacity-50
			`}
			onClick={onClick}
			style={{ background: color }}
		>
			{isSelected && (
				<motion.div
					layoutId="outline"
					className="colorCircle-outline"
					initial={false}
					animate={{
						borderColor: currentThemeMode === 'dark' ? color : 'white',
					}}
					transition={spring}
				/>
			)}
		</li>
	);
}

const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

function Drawer(props) {
	const { currentPalette, setPalette, currentThemeMode, setThemeMode,  } =
		useStateContext();

	const [drawerState, setDrawerState] = useState(false);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setDrawerState(open);
		// setState({ ...state, [anchor]: open });
	};
	const anchor = 'right';
	return (
		<React.Fragment>
			<IconButton
				onClick={toggleDrawer(anchor, true)}
				className='p-5 paletteButton'
				style={{
					background:
					currentThemeMode === 'light' ? currentPalette.color : 'black',
					position:"fixed",
					bottom:80,
					right:20,
					zIndex:1000,
				}}
				
			>
				<PaletteIcon className='text-4xl text-white animate-pulse'
				
				/>
			</IconButton>
			<SwipeableDrawer
				anchor={anchor}
				// open={state[anchor]}
				open={drawerState}
				onClose={toggleDrawer(anchor, false)}
				onOpen={toggleDrawer(anchor, true)}
			>
				<div
					className="p-4"
					style={{
						background:
							currentThemeMode === 'light' ? currentPalette.color : 'black',
						color: 'white',
						height: '100vh',
					}}
				>
					<div className="flex flex-row justify-between">
						<h5
							className="my-auto"
							style={{
								color: 'white',
							}}
						>
							Select Theme Palette
						</h5>

						<IconButton onClick={toggleDrawer(anchor, false)}>
							<CloseRoundedIcon className="text-white font-extrabold" />
						</IconButton>
					</div>

					<div
						className="flex my-4 row "
						style={{
							width: '100%',
						}}
					>
						<div className="basis-3/4 my-auto ">
							{currentThemeMode.toUpperCase()} MODE
						</div>
						<IconButton
							sx={{ ml: 1 }}
							onClick={() => setThemeMode()}
							color="inherit"
							className="basis-1/4 "
						>
							{currentThemeMode === 'dark' ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>
					</div>
					<Divider
						light
						style={{
							background:
								currentThemeMode === 'dark' ? currentPalette.color : 'white',
						}}
					/>
					<div className="my-2">
						<AnimateSharedLayout>
							<ul className="colorCircle-ul">
								{customColors.map((color, index) => (
									<Item
										key={index}
										color={color.color}
										currentThemeMode={currentThemeMode}
										isSelected={currentPalette.color == color.color}
										onClick={() => setPalette(index)}
									/>
								))}
							</ul>
						</AnimateSharedLayout>
					</div>
				</div>
			</SwipeableDrawer>
		</React.Fragment>
	);
}

export default Drawer;
