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
            <div class="card border-none mb-3 mx-5 w-50" style="max-width: 18rem;">
                <i class="card-img-top rounded p-3 lni {tech.img_url}"></i>
                <div class="card-body text-black">
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
        overflow-x: hidden;
    }

    .tech-stack-wrapper > h1 {
        font-size: 3rem;
        word-wrap: break-word;
    }

    .card>i {
        font-size: 10rem;
    }

    .card {
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.5s ease;
    }
</style>
