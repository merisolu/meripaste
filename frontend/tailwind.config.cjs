/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#111111',
				secondary: '#444444',
				disabled: '#ACACACAC',
				background: '#EEEEEE'
			}
		},
	},
	plugins: [],
}
