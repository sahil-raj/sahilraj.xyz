<script>
    import TextData from "./components/TextData.svelte";
	import Loader from "./components/Loader.svelte";

	export let loadPercentage = 0;
	export let statusText = "UC";
</script>

<main>
	<div class="container-fluid my-cont">
		<TextData/>
		<Loader statusText={statusText} loadPercentage={loadPercentage}/>
	</div>
</main>

<style>
	.my-cont {
		height: 100vh;
		width: 100vw;
		background: #000;
		position: fixed !important;
	}
</style>
