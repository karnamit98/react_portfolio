import React, { useEffect, useState, useRef, useCallback } from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import { useStateContext } from '../../contexts/ContextProvider';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CircularAvatar from './CircularAvatar';
import useWindowSize from '../../hooks/useWindowSize';
import { breakpoints } from '../../data/dummy';

function ProfileHeader(props) {
	const { currentPalette, currentThemeMode } = useStateContext();
	const [layoutBg, setLayoutBg] = useState(
		currentThemeMode === 'light' ? currentPalette.color : 'black'
	);
	const [layoutFg, setLayoutFg] = useState(
		currentThemeMode === 'light' ? 'black' : 'white'
	);

	const [containerRef, containerInView] = useInView();
	const containerController = useAnimation();

	const { width, height } = useWindowSize();
	const [headerMarginTop, setHeaderMarginTop] = useState(
		width <= breakpoints.xxs ? '100px'
		: width <= breakpoints.xs
		? '140px'
		: width <= breakpoints.sm
		? '180px'
		: '200px'
    );

	const line1 = 'Software Developer';
	const line2 = 'Amit Karn';
	const line3 =
		'	Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis \
    eveniet numquam, temporibus fugit corrupti fuga veniam dolor. Eaque \
    non ullam iure facilis veritael labore earum totam quasi libero \
    magni.';

	useEffect(() => {
		setHeaderMarginTop(
			width <= breakpoints.xxs ? '100px'
			: width <= breakpoints.xs
			? '140px'
			: width <= breakpoints.sm
			? '180px'
			: '200px'
		)
	}, [width]);

	const containerVariants = {
		hidden: {
			skew: '10deg,-40deg',
			opacity: 0,
			scale: 0,
		},
		visible: {
			skew: '0',
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5 },
		},
	};

	const header1Variant = {
		hidden: { opacity: 0, left:-200, },
		show: {
			opacity: 1,
			left:0,
			transition: {
				delay: .7,
				staggerChildren: 0.08,
			},
		},
	}
	const header2Variant = {
		hidden: { opacity: 0, },
		show: {
			opacity: 1,
			transition: {
				delay: .8 ,
				staggerChildren: 0.2,
			},
		},
	}
	const sentence = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				delay: .8,
				staggerChildren: 0.08,
			},
		},
	};
	
	const header2Letter = {
		hidden: {
			opacity: 0,
			scale: 0,
			top: 100,
		},
		show: {
			opacity: 1,
			scale:1,
			top: 0,
		},
	}

	const letter = {
		hidden: {
			opacity: .6,
			top: -40,
		},
		show: {
			opacity: 1,
			top: 0,
		},
	};

	const buttonVariant = {
		hidden: { opacity: 0, right: -1000},
		show: {
			opacity: 1,
			right:0,
			transition: {
				delay: .8,
			},
		},
	}

	const container = {
		hidden: { rotate: 90 },
		show: {
			rotate: 0,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.1,
			},
		},
	};
	const itemA = {
		hidden: { opacity:0,scale:0, top: -400, left:-500,rotate:'-360deg',},
		show: {  opacity:1,scale:1, top: 0, left:0,rotate:'0deg' },
	};

	const itemB = {
		hidden: { opacity:0,scale:0, top: -400, right:-800,rotate:'-360deg',},
		show: {  opacity:1,scale:1, top: 0, right:0,rotate:'0deg' },
	};

	useEffect(() => {
		if (containerInView) {
			containerController.start('show');
		} else {
			containerController.start('hidden');
		}
	}, [containerController, containerInView]);

	useEffect(() => {
		setLayoutBg(currentThemeMode === 'light' ? currentPalette.color : 'black');
		setLayoutFg(currentThemeMode === 'light' ? 'black' : 'white');
	}, [currentPalette, currentThemeMode]);

	return (
		<AnimatePresence className="mt-20 ">
			<motion.div
				className="md:container mx-auto flex flex-col sm:flex-row
            justify-center gap-4 w-100 
		
             "
				style={{
					 marginTop: headerMarginTop, //'120px',
				}}
				ref={containerRef}
				variants={container}
				initial="hidden"
				animate={containerController}
				exit={{ x: -300, opacity: 0 }}
			>
				<motion.div
					className="self-center avatarContainer "
					style={{
						background:  layoutBg, //'#444', //
						position: 'relative',
					}}
					variants={itemA}
				>
					<CircularAvatar layoutBg={layoutBg} />
				</motion.div>

				<Box
					className=" self-center p-5 font-montserrat text-left sm:p-10 md:p-15"
					sx={{
						color: layoutFg,
						width: {
							md: '40%',
							sm: '100%',
							xs: '100%',
						},
						position: 'relative',
					}}
					component={motion.div}
					variants={itemB}
				>
					<motion.p
						className="my-2 text-sm ml-1 font-semibold "
						style={{
							color: layoutFg,
						}}
						variants={header1Variant}
						initial="hidden"
						animate={containerController}
					>
						{line1.split('').map((char, index) => {
							return (
								<motion.span  style={{position:'relative',}} key={char + '-' + index} variants={letter}>
									{' '}
									{char}
								</motion.span>
							);
						})}
					</motion.p>

					<p
						className="my-2 font-bold text-5xl font-poppins"
						style={{ height: 60 }}
					>
						<motion.span
							className="nameText"
							style={{
								WebkitTextStroke: `2px ${layoutFg}`,
							}}
							variants={header2Variant}
							initial="hidden"
							animate={containerController}
						>
							{line2.split('').map((char, index) => {
								return (
									<motion.span  key={char + '-' + index} variants={header2Letter}>
										{char}
									</motion.span>
								);
							})}
						</motion.span>
						<motion.span
							className="nameText"
							style={{
								color: layoutFg,
							}}
							variants={header2Variant}
							initial="hidden"
							animate={containerController}
						>
							{line2.split('').map((char, index) => {
								return (
									<motion.span  key={char + '-' + index} variants={header2Letter} >
										{char}
									</motion.span>
								);
							})}
						</motion.span>
					</p>

					<motion.p
						className="my-4 text-sm font-semibold leading-7"
						variants={sentence}
						initial="hidden"
						animate={containerController}
					>
						{/* {line3.split('').map((char, index) => {
							return (
								<motion.span style={{position:'relative',}} key={char + '-' + index} variants={letter}
								whileHover={{color: "#1089ff",transform: 'scale(2)',}}
								>
									{char}
								</motion.span>
							);
						})} */}
						{line3}
					</motion.p>

					<motion.div className="my-5 flex flex-row  gap-3 font-bold" style={{position:'relative'}} variants={buttonVariant} >
						<button className=" btnCv self-center">downloadCV</button>
					</motion.div>
				</Box>
			</motion.div>
		</AnimatePresence>
	);
}

export default ProfileHeader;
