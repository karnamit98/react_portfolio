import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';
import './style.scss';
import useWindowSize from '../../hooks/useWindowSize';
import { breakpoints } from '../../data/dummy';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';


const InputField = ({ label, id, type, required, placeholder, currentFg }) => {
	return (
		<div className="relative z-0 w-full mb-6 group">
			<input
				type={type}
				id={id}
				className="block py-2.5 px-0 w-full font-semibold text-sm text-gray-900 bg-transparent border-0 
                border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder={placeholder}
				required={required === 'true' ? true : false}
				style={{
					borderColor: currentFg,
					color: currentFg,
				}}
			/>
			<label
				htmlFor={id}
				className="peer-focus:font-medium absolute font-semibold text-sm text-gray-500 dark:text-gray-400
                 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				style={{
					color: currentFg,
				}}
			>
				{label}
				<sup>*</sup>
			</label>
		</div>
	);
};

const TextArea = ({ label, id, type, required, placeholder, currentFg }) => {
	return (
		<div className="relative z-0 w-full mb-6 group">
			<label
				htmlFor="message"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
				style={{
					color: currentFg,
				}}
			>
				{label}
				<sup>*</sup>
			</label>
			<textarea
				id={id}
				rows="4"
				// className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
				// border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
				// dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
				// dark:focus:border-blue-500 peer  appearance-none
				// "

				className="block p-2.5  w-full font-semibold text-sm text-gray-900 bg-transparent border-0 
                border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder="Leave a comment..."
				required={required === 'true' ? true : false}
				style={{
					border: `2px solid ${currentFg}`,
					borderRadius: '0',
					background: 'transparent',
					borderColor: currentFg,
					color: currentFg,
				}}
			></textarea>
		</div>
	);
};

const ContactInfo = ({children , header, content}) => {
	return (
		<div className="flex flex-row text-white mt-5 gap-3">
			<div
				className="flex justify-center items-center contactIconBg my-auto  "
				style={{
					width: '50px',
					height: '50px',
					borderRadius: '50%',
				}}
			>
				{children}
			</div>

			<div style={{
                width:'80%'
            }}
            className="grow-0 my-auto"
            >
				<span className="font-bold text-lg">{header}: </span>
				{content}
			</div>
		</div>
	);
};

function Contact(props) {
	const ariaLabel = { 'aria-label': 'Full Name' };

	const { width, height } = useWindowSize();
	const { currentThemeMode, currentPalette } = useStateContext();
	const [currentBg, setCurrentBg] = useState(
		currentThemeMode === 'light' ? currentPalette.color : 'black'
	);
	const [currentFg, setCurrentFg] = useState(
		currentThemeMode === 'light' ? 'black' : 'white'
	);

	const [name, setName] = useState('');
    const [contactWidth, setContactWidth] = useState(
        width <= breakpoints.xxs ? '250px'
        : width <= breakpoints.xs
        ? '320px'
        : width <= breakpoints.sm
        ? '400px'
        : '500px'
    );

	useEffect(() => {
		setCurrentBg(currentThemeMode === 'light' ? currentPalette.color : 'black');
		setCurrentFg(currentThemeMode === 'light' ? 'black' : 'white');
	}, [currentThemeMode, currentPalette]);


    useEffect(()=>{
setContactWidth(
    width <= breakpoints.xxs
							? '250px'
                            : width <= breakpoints.xs
							? '320px'
							: width <= breakpoints.sm
							? '400px'
							: '500px'
)
    },[width])

	return (
		<div
			className=" font-robo mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0"
			style={{
				marginTop: '100px',
			}}
		>
            
			<div
				className=" p-5 px-8 flex flex-col "
				style={{
					// height:'400px',
					// width:'300px',
					background: currentBg,
					// borderRadius:'50%',
					boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
					position: 'relative',
					top: '-30px',
					left: '10px',
					color: 'white',
					width:contactWidth
				}}
			>
				<h2 className="text-3xl font-semibold">Contact Me</h2>
             
				<div className="flex flex-col gap-3 " style={{}}>
					<ContactInfo header="Address" content="New Baneshwor, Kathmandu, Nepal 44600" >
                        <LocationOnIcon />
                    </ContactInfo>
                    <ContactInfo header="Phone" content="+977 9816810976" >
                        <LocalPhoneIcon />
                    </ContactInfo>
                    <ContactInfo header="Email" content="amit.karn98@gmail.com" >
                        <SendIcon />
                    </ContactInfo>
                    <ContactInfo header="Website" content="www.amitkarn.com.np" >
                        <LanguageIcon />
                    </ContactInfo>
				</div>
			</div>

			<div
				className=" flex flex-col 
        justify-center gap-4 w-100 p-10 "
				// style={{ background: currentBg }}
				style={{
					position: 'relative',
					background: 'rgba(7, 0, 0, 0.09)',
					// borderRadius: '16px',
					boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(1px)',
					WebkitBackdropFilter: 'blur(1px)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
				}}
			>
				<div className="flex flex-col sm:flex-row gap-4 font-montserrat ">
					<InputField
						label="Full Name"
						id="name"
						type="text"
						required="true"
						placeholder=" "
						currentFg={currentFg}
					/>
					<InputField
						label="Email"
						id="email"
						type="email"
						required="true"
						placeholder=" "
						currentFg={currentFg}
					/>
				</div>

				<InputField
					label="Subject"
					id="subject"
					type="text"
					required="true"
					placeholder=" "
					currentFg={currentFg}
				/>

				<TextArea
					label="Message"
					id="message"
					type="text"
					required="true"
					placeholder=" "
					currentFg={currentFg}
				/>
			</div>
		</div>
	);
}

export default Contact;
