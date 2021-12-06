module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				heading: "#1F2937",
				"sub-heading": "#4B5563",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
