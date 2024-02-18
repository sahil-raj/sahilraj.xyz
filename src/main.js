import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		loadPercentage: 13
	}
});

export default app;