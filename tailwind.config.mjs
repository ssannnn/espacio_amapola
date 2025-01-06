import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:	{
				serif: ['Lovechild', defaultTheme.fontFamily.serif],
				sans: ['Montserrat', defaultTheme.fontFamily.sans]
			},
			backgroundImage: {
				'hero-bg': "url('./src/assets/images/hero_img.png')",
				'lugar': "url('./src/assets/images/lugar_img.png')"
			},
			colors: {
				orange: {
				    1: '#fed1b8',
        		  	2: '#fd7c51',
                  	3: '#f79561',			 
				},
				white:{
					1: '#f4f3ee',
				}
			  }
		},
		plugins: [],
	}
}