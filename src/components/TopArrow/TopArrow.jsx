import React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';


function TopArrow({bgColor}) {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

    return (
        <IconButton
        onClick={scrollToTop}
        className='hover:shadow-2xl animate-bounce paletteButton'
        style={{
            background: bgColor,
            position:"fixed",
            bottom:20,
            right:20,
            zIndex:1000,
        }}
        >
            <NavigationIcon className='text-white text-3xl' />
        </IconButton>
    );
}

export default TopArrow;