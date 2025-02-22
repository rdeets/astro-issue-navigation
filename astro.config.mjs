// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
    site: 'https://test.com',
	output: 'static',
	trailingSlash: 'ignore',
	adapter: cloudflare({
		imageService: 'compile',
	}),
	integrations: [
		(await import('@playform/inline')).default({}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	experimental: {
		contentIntellisense: true,
		clientPrerender: true,
	},
	security: {
		checkOrigin: false,
	},
	vite: {
		ssr: {
			target: 'webworker',
		},
	},
});
