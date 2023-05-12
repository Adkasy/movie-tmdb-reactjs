/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#221F1F",
				danger: "#E50914",
			},
			fontFamily: {
				primary: "Kanit",
			},
		},
	},
	plugins: [],
}
