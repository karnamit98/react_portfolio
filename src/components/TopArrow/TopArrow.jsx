import React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigationIcon from '@mui/icons-material/Navigation';


function TopArrow({bgColor}) {
    return (
        <IconButton
        className='hover:shadow-2xl animate-bounce paletteButton'
        style={{
            background: bgColor,
            position:"fixed",
            bottom:20,
            right:20
        }}
        >
            <NavigationIcon className='text-white text-3xl' />
        </IconButton>
    );
}

export default TopArrow;