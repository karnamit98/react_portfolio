// module.exports = {
//     content: ['./src/**/*.{js,jsx,ts,tsx}'],
//     darkMode: 'class',
//     theme: {
//       fontFamily: {
//         display: ['Open Sans', 'sans-serif'],
//         body: ['Open Sans', 'sans-serif'],
//       },
//       extend: {
//         fontSize: {
//           14: '14px',
//         },
//         backgroundColor: {
//           'main-bg': '#FAFBFB',
//           'main-dark-bg': '#20232A',
//           'secondary-dark-bg': '#33373E',
//           'light-gray': '#F7F7F7',
//           'half-transparent': 'rgba(0, 0, 0, 0.5)',
//         },
//         borderWidth: {
//           1: '1px',
//         },
//         borderColor: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//         width: {
//           400: '400px',
//           760: '760px',
//           780: '780px',
//           800: '800px',
//           1000: '1000px',
//           1200: '1200px',
//           1400: '1400px',
//         },
//         height: {
//           80: '80px',
//         },
//         minHeight: {
//           590: '590px',
//         },
//         backgroundImage: {
//           'hero-pattern':
//             "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
//         },
//       },
//     },
//     plugins: [],
//   };

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	// content: [
	//   "./src/**/*.{js,jsx,ts,tsx}",
	// ],
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				customCyan: {
					1: '#ffffff',
					2: '#e3f6f5',
					3: '#bae8e8',
					4: '#2c698d',
					5: '#272643',
				},
				customRed: {
					1: '#f1e8e6',
					2: '#edd2cb',
					3: '#f55951',
					4: '#543c52',
					5: '#361d32',
				},
				customBlue: {
					1: '#44c2fd',
					2: '#6592fd',
					3: '#5f59f7',
					4: '#8c61ff',
					5: '#343090',
				},
				customPurple: {
					1: '#e0f0ea',
					2: '#95adbe',
					3: '#5f59f7',
					4: '#574f7d',
					5: '#503a65',
				},
				customGreen: {
					1: '#efeeb4',
					2: '#dad873',
					3: '#58b368',
					4: '#309975',
					5: '#454d66',
				},
			},
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				grow: 'grow ease-out .25s',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				  },
				grow: {
					'0%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.25)' },
					'50%': { transform: 'scale(1.5)' },
					'72%': { transform: 'scale(1.75)' },
					'100%': { transform: 'scale(2)' },
				},
				// bounce : {
				// 	'0%, 100%': {
				// 	  transform: 'translateY(-25%)',
				// 	  animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
				// 	},
				// 	'50%': {
				// 	  transform: 'translateY(0)',
				// 	  animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
				// 	}
				//   }
			}
		},
	},
	plugins: [],
};
