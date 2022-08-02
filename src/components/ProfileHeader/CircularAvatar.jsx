import React, { useState, useCallback, useEffect } from 'react';
import avatarImg from './av3.jpg';
import Avatar from '@mui/material/Avatar';
import { breakpoints } from '../../data/dummy';
import useMousePosition from '../../hooks/useMousePosition';
import useWindowSize from '../../hooks/useWindowSize';
import Box from '@mui/material/Box';


//Calculates final transitional movement distances for x and y
const getFinalCoordinates = (
	centerX,
	centerY,
	maxDistance,
	traversableDistance,
	mX,
	mY) => {

    const dL = getDisplacement(centerX,centerY,mX,mY) //distance from circle centra and mouse location

    //smaller Displacement to translate to
    const dM = (dL >= maxDistance) ? traversableDistance : ((traversableDistance/maxDistance) * dL );

    const angle = Math.atan2(mX,mY) ;



    return {
        x: mX>=centerX ?  dM * -1 : dM,
        y: mY>=centerY ?  dM * -1 : dM,
    }

};

const getDisplacement = (x1,y1,x2,y2) => {
    return Math.sqrt( Math.pow( (x2-x1), 2 ) +  Math.pow( (y2-y1), 2 ) );
}

function CircularAvatar({layoutBg}) {
	const { width, height } = useWindowSize();
	const { x: mouseX, y: mouseY } = useMousePosition();
    const [initialCentre,setInitialCentre] = useState({x:0,y:0})
	const [elementBoundingRect, setElementBoundingRect] = useState(null);
    const [avatarElem, setAvatarElem] = useState(null);
	const avatarRef = useCallback(
		(node) => {
			if (node !== null) {
				setElementBoundingRect(node.getBoundingClientRect());
				setAvatarElem(node);
                
			}
		},
		[width, height]
	);
    const [xMovement, setXMovement] = useState(0);
    const [yMovement, setYMovement] = useState(0);



    useEffect(()=>{
        console.log('hiss');
        if (elementBoundingRect != null) {
            setInitialCentre({
                x: elementBoundingRect['x'] + elementBoundingRect['width'] / 2,
                y: elementBoundingRect['y'] + elementBoundingRect['height'] / 2,
            }) }
    },[])
	useEffect(() => {
		if (elementBoundingRect != null) {
		
		
			const centre = {
				x: initialCentre.x, 
				y: initialCentre.y 
			};
			const traversableDistance = 10;
				// width <= breakpoints.xs
				// 	? 10
				// 	: width <= breakpoints.sm
				// 	? 15
				// 	: width <= breakpoints.md
				// 	? 20
				// 	: 25;
		
            const maxDistance = 1000;

            const transitionXY = getFinalCoordinates(centre.x,(centre.y), maxDistance, traversableDistance, mouseX, (mouseY));
          
            setXMovement(transitionXY.x);
            setYMovement( transitionXY.y);
            
        
		}
	}, [mouseX, mouseY]);



	return (
		<Box
			className=""
			sx={{
                background:layoutBg, // '#444',
				overflow: 'hidden',
				borderRadius: '50%',
				width: {
					md: 300,
					sm: 200,
					xs: 150,
				},
				height: {
					md: 300,
					sm: 200,
					xs: 150,
				},
				margin: {
					xl: '25px',
					md: '20px',
					sm: '15px',
					xs: '10px',
				},
			}}
		>
           
			<Avatar
				ref={avatarRef}
				className="avatarImg "
				alt="Avatar Image"
				src={avatarImg}
				sx={{
                    transition: 'transform .2s ease-in-out',
                    transform: `scale(1.2) translateX(${xMovement}px) translateY(${yMovement}px)`,
				
					width: {
						md: 300,
						sm: 200,
						xs: 150,
					},
					height: {
						md: 300,
						sm: 200,
						xs: 150,
					},
				}}
			/>
		</Box>
	);
}

export default CircularAvatar;
