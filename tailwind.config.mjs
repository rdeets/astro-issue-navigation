/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xxs: '400px',
			xs: '560px',
			tablet: '844px',
			desktop: '1320px',
		},
		fontWeight: {
			normal: '400',
			bold: '700',
		},
		extend: {
			// sans: ['Poppins', 'Cabin', ...defaultTheme.fontFamily.sans],
			colors: {
				destructive: 'rgb(var(--tw-color-destructive) / <alpha-value>)',
				warning: 'rgb(var(--tw-color-warning) / <alpha-value>)',
				stroke: 'rgb(var(--tw-color-stroke) / <alpha-value>)',
				link: {
					hover: 'rgb(var(--tw-color-link-hover) / <alpha-value>)',
					DEFAULT: 'rgb(var(--tw-color-link) / <alpha-value>)',
					pressed: 'rgb(var(--tw-color-link-pressed) / <alpha-value>)',
				},
				text: {
					primary: {
						DEFAULT: 'rgb(var(--tw-color-text-primary) / <alpha-value>)',
						light: 'rgb(var(--tw-color-text-primary-light) / <alpha-value>)',
					},
					secondary: 'rgb(var(--tw-color-text-secondary) / <alpha-value>)',
				},
				bg: {
					DEFAULT: 'rgb(var(--tw-color-background) / <alpha-value>)',
					nav: 'rgb(var(--tw-color-background-nav) / <alpha-value>)',
					modal: 'rgb(var(--tw-color-background-modal) / <alpha-value>)',
					input: {
						DEFAULT: 'rgb(var(--tw-color-bg-input) / <alpha-value>)',
						hover: 'rgb(var(--tw-color-bg-input-hover) / <alpha-value>)',
					},
				},
				primary: {
					DEFAULT: 'rgb(var(--tw-color-primary) / <alpha-value>)',
					light: 'rgb(var(--tw-color-primary-light) / <alpha-value>)',
					dark: 'rgb(var(--tw-color-primary-dark) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'rgb(var(--tw-color-secondary) / <alpha-value>)',
					light: 'rgb(var(--tw-color-secondary-light) / <alpha-value>)',
					dark: 'rgb(var(--tw-color-secondary-dark) / <alpha-value>)',
				},
				error: 'rgb(var(--tw-color-error) / <alpha-value>)',
				success: 'rgb(var(--tw-color-success) / <alpha-value>)',
				info: 'rgb(var(--tw-color-info) / <alpha-value>)',
				shadow: 'rgb(var(--tw-color-shadow) / <alpha-value>)',
				neutral: {
					DEFAULT: 'rgb(var(--tw-color-neutral) / <alpha-value>)',
					light: 'rgb(var(--tw-color-neutral-light) / <alpha-value>)',
					dark: 'rgb(var(--tw-color-neutral-dark) / <alpha-value>)',
				},
			},
		},
	},
	plugins: [],
};
