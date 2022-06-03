import React, { useEffect, useState } from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useStateContext } from '../../contexts/ContextProvider';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import avatarImg from './avatar2.webp';
import Avatar from '@mui/material/Avatar';
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

	useEffect(() => {}, [width]);

	const containerVariants = {
		hidden: {
			// rotateX: '59deg',
			skew: '10deg,-40deg',
			// translateY:'-100%',
			opacity: 0,
			scale: 0,
		},
		visible: {
			// rotateX: '0deg',
			skew: '0',
			// translateY:'0%',
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5 },
		},
	};

	useEffect(() => {
		if (containerInView) {
			containerController.start('visible');
		} else {
			containerController.start('hidden');
		}
	}, [containerController, containerInView]);

	useEffect(() => {
		setLayoutBg(currentThemeMode === 'light' ? currentPalette.color : 'black');
		setLayoutFg(currentThemeMode === 'light' ? 'black' : 'white');
	}, [currentPalette, currentThemeMode]);

	return (
		<div>
			<div
				className="md:container mx-auto flex flex-col sm:flex-row
            justify-center gap-4 w-100 
             "
				style={{
					marginTop:'120px'
						// width < breakpoints.xs
						// 	? '20px'
						// 	: width < breakpoints.sm
						// 	? '40px'
						// 	: width < breakpoints.md
						// 	? '80px'
						// 	: '120px',
				}}
			>
				{/* <Box sx={{ background: '#cfe8fc', height: '100vh' }} 
                   ref={containerRef}
                   variants={containerVariants}
                   initial="hidden"
                   animate={containerController}
                   component={motion.div}
                >
                </Box> */}

				<div
					className="self-center avatarContainer"
					style={{
						background: layoutBg,
						// margin: (width<breakpoints.xs)?'5px':( width<breakpoints.sm ? '10px' : (width<breakpoints.md?'14px':'20px'))
					}}
				>
					<Avatar
						className="avatarImg "
						alt="Avatar Image"
						src={avatarImg}
						sx={{
							width: {
								md: 290,
								sm: 190,
								xs: 100,
							},
							height: {
								md: 300,
								sm: 200,
								xs: 110,
							},
							margin: {
								xl: '28px',
								md: '22px',
								sm: '16px',
								xs: '10px',
							},
						}}
					/>
				</div>

				<Box
					className=" self-center p-5 font-montserrat text-left sm:p-10 md:p-15"
					sx={{
						color: layoutFg,
						// background:"red",
						width: {
							md: '40%',
							sm: '100%',
							xs: '100%',
						},
						// height: {
						//     md:300,
						//     sm:200,
						//     xs:110
						// },
					}}
				>
					<p className="my-2 text-base">Software Developer</p>

					<p className="my-2 font-bold text-5xl">Amit Karn</p>

					<p className="my-2 text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						eveniet numquam, temporibus fugit corrupti fuga veniam dolor. Eaque
						non ullam iure facilis veritael labore earum totam quasi libero
						magni.
					</p>

					<div className="my-2 flex flex-row  gap-3">
						<button className=" btnCv self-center">downloadCV</button>
                        {/* <button className=" btnContact self-center">Contact</button> */}
						{/* <button class="btnContact-pushable self-center" role="button">
							<span class="btnContact-shadow"></span>
							<span class="btnContact-edge"></span>
							<span class="btnContact-front text">Contact Me</span>
						</button> */}
					</div>
				</Box>
			</div>
		</div>
	);
}

export default ProfileHeader;
