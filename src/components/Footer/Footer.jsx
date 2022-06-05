import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

function Footer(props) {

    const {currentThemeMode,currentPalette} = useStateContext();

	return (
		<footer className=" text-center lg:text-left " 
        style={{background: currentThemeMode==="dark"?"black":currentPalette.color  }}
        >
			<div
				className="text-white text-center p-4"
				
			>
				Copyright © {new Date().getFullYear() } 
				<a className="" target="blank" href="#">
					Amit Karn
				</a>
			</div>
		</footer>
	);
}

export default Footer;
