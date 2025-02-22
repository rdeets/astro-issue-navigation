// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
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
