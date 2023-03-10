/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./<custom directory>/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				header: '#1b1b1f',

				background_primary: '#f4f5f6',
				background_secondary: '#ffffff',

				text: '#7a7a80',
				text_datail: '#aeaeb3',
				title: '#47474d',

				line: '#ebebf0',

				main: '#dc1637',
				main_light: '#fdedef',
				success: '#03b252',

				shape: '#e1e1e8',
				shape_dark: '#29292e'
			},
			fontFamily: {
				primary_400: 'Inter_400Regular',
				primary_500: 'Inter_500Medium',
				secundary_400: 'Archivo_400Regular,',
				secundary_500: 'Archivo_500Medium,',
				secundary_600: 'Archivo_600SemiBold'
			}
		}
	},
	plugins: []
}
