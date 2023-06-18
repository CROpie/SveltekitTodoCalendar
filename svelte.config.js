//import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
