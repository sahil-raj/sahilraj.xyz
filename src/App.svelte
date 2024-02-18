<script>
    import TextData from "./components/TextData.svelte";
	export let loadPercentage = 0;
</script>

<main>
	<div class="container-fluid my-cont">
		<TextData loadPercentage= {loadPercentage} />
	</div>
</main>

<style>
	.my-cont {
		height: 100vh;
		width: 100vw;
		background: #000;
	}
</style>
