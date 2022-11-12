export default {
	plugins: [
    (await import('postcss-import')).default,
		(await import('tailwindcss')).default,
		(await import('autoprefixer')).default
	]
};