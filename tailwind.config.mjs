/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,cjs,mjs,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		  },
		  colors: {
			'dark-blue': '#16215C',
			'light-blue': '#E4ECFF',
			// 'pink': '#ff49db',
			'light-pink': '#F8EFFF',
			'white-purpink': '#FDF9FF',
			'purple': '#E7DFFF',
			// 'dark-purple': '#273444',
		  },
		extend: {backgroundImage: theme => ({
			'light-gradient': 'linear-gradient(to bottom, #E4ECFF 0%, #E7DFFF 50%, #F8EFFF 100%)',
		  })},
	},
	plugins: [],
}
