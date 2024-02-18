import App from './App.svelte';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();

const app = new App({
	target: document.body
});

export default app;