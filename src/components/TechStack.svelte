<script>
    import { each } from "svelte/internal";

    export let techStackData = [];
</script>

<div class="tech-stack-wrapper vw-100">
    <h1 class="pt-5 pb-5">Technologies Known</h1>
    <div
        class="d-flex flex-row flex-wrap justify-content-center align-item-center"
    >
        {#each techStackData as tech (tech.id)}
            <div class="card border-none mb-3 mx-5" style="max-width: 18rem;">
                <img src={tech.img_url} class="card-img-top" alt={tech.name} />
                <div class="card-body text-white">
                    <h5 class="card-title">{tech.name}</h5>
                </div>
            </div>
        {:else}
            <h2 class="text-secondary">Error loading data...</h2>
        {/each}
    </div>
</div>

<style>
    .tech-stack-wrapper {
        background-color: #4fc3f7;
    }

    .tech-stack-wrapper > h1 {
        font-size: 5rem;
    }

    .card {
        background-color: rgba(0, 0, 0, 0.5);
        /* margin: 5vw; */
    }
</style>
