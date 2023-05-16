/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		maxWidth: {
			container: "1440px",
			contentContainer: "1140px",
			containerSmall: "1024px",
			containerXs: "768px",
		},

		extend: {
			screens: {
				sm: "320px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},

			fontFamily: {
				inter: ["var(--font-inter)"],
				abel: ["var(--font-abel)"],
			},

			colors: {
				bgColor: "#0c304c",
				primary: "#0c304c",
				primary1: "#001e28",
				sec: "#ed1818",
				accent: "#8d99ae",
			},
		},
	},

	plugins: [],
};
