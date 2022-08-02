import React, { createContext, useContext, useState, useEffect } from 'react';
import { customColors, darkGradients, lightGradients } from '../data/dummy';


const StateContext = createContext();

const palettess = {
    'cyan':'customCyan',
    'red':'customRed',
    'purple':'customPurple',
    'blue':'customBlue',
    'green':'customGreen',
}

const palettes = [
    {
        name:'red',
        class:'customRed'
    },
    {
        name:'cyan',
        class:'customCyan'
    },
    {
        name:'purple',
        class:'customPurple'
    },
    {
        name:'blue',
        class:'customBlue'
    },
    {
        name:'green',
        class:'customGreen'
    },
]

export const ContextProvider = ({ children }) => {
	
    const [activeMenu, setActiveMenu] = useState();
    
    const paletteIndex = localStorage.getItem('paletteIndex')?localStorage.getItem('paletteIndex'):0;
    const [currentPaletteIndex, setCurrentPaletteIndex] = useState(paletteIndex)
    const [currentPalette, setCurrentPalette] = useState(customColors[currentPaletteIndex])
    const colorMode = localStorage.getItem('colorMode')?localStorage.getItem('colorMode'):"light";
    const [currentThemeMode, setCurrentThemeMode] = useState(colorMode)

    const darkBgColor = localStorage.getItem('darkBgColor')?localStorage.getItem('darkBgColor'):darkGradients[Math.floor(Math.random()*darkGradients.length)];
    const [currentDarkBgColor, setCurrentDarkBgColor] = useState(darkBgColor)
    const lightBgColor = localStorage.getItem('lightBgColor')?localStorage.getItem('lightBgColor'):lightGradients[Math.floor(Math.random()*lightGradients.length)];
    const [currentLightBgColor, setCurrentLightBgColor] = useState(lightBgColor)

    const setPalette = (option) => {
        const currPalette = localStorage.getItem('paletteIndex')?localStorage.getItem('paletteIndex'):currentPaletteIndex;
        setCurrentPaletteIndex(option)
        setCurrentPalette(customColors[option])
        localStorage.setItem('paletteIndex', option )
    }

    const setThemeMode = () => {
        const currThemeMode = localStorage.getItem('colorMode')?localStorage.getItem('colorMode'):currentThemeMode;
        setCurrentThemeMode( currThemeMode==="light"?"dark":"light" ) ;
        localStorage.setItem('colorMode', currThemeMode==="light"?"dark":"light" );   
    }

    useEffect(()=>{
        const darkBgColor = darkGradients[Math.floor(Math.random()*darkGradients.length)];
        setCurrentDarkBgColor(darkBgColor);
        localStorage.setItem('darkBgColor', darkBgColor );

        const lightBgColor = lightGradients[Math.floor(Math.random()*lightGradients.length)];
        setCurrentLightBgColor(lightBgColor);
        localStorage.setItem('lightBgColor', lightBgColor );
    },[currentThemeMode, currentPalette])
    

   
    return (
		<StateContext.Provider
			value={{
                currentPalette, setPalette,
                currentThemeMode, setThemeMode,
                currentDarkBgColor, currentLightBgColor
			}}
		>
			{children}
		</StateContext.Provider>
	);
}



export const useStateContext = () => useContext(StateContext);