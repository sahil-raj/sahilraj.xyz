import App from './App.svelte';
import { SpeedInsights } from "@vercel/speed-insights/next"

const app = new App({
	target: document.body
});

export default app;