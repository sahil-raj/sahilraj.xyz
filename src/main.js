import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		loadPercentage: 25
	}
});

export default app;