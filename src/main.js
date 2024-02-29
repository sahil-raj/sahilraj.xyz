import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		loadPercentage: 95,
		statusText: "working on it..."
	}
});

export default app;
