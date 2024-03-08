import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		loadPercentage: 99,
		statusText: "working on it..."
	}
});

export default app;
