import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// reference the library only
		'./lib/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
			  primary: colors.blue,
			},
		  },
	},
	plugins: [],
}

