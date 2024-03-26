<!-- switch lineicons -->
<script>
    import { each, query_selector_all } from "svelte/internal";

    export let techStackData = [];
    const maxVisible = 4;

    let showMore = false;

    function handleClickShowMore() {
        showMore = true;
        document.querySelectorAll(".show-more-btn")[0].style.display = "none";
    }
</script>

<div class="tech-stack-wrapper">
    <h1 class="pt-5 pb-5">Technologies Known</h1>
    <div
        class="card-holder d-flex flex-row flex-wrap justify-content-center align-item-center"
    >
        {#if techStackData.length <= maxVisible}
            {#each techStackData as tech (tech.id)}
                <div
                    class="card border-none mb-3 mx-5 w-50"
                    style="max-width: 18rem;"
                >
                    <i class="card-img-top rounded pt-3 pb-3 lni {tech.img_url} text-black"></i>
                    <div class="card-body text-black">
                        <h5 class="card-title">{tech.name}</h5>
                    </div>
                </div>
            {:else}
                <h2 class="text-secondary">Error loading data...</h2>
            {/each}
        {:else}
            {#each techStackData.slice(0, maxVisible) as tech (tech.id)}
                <div
                    class="card border-none mb-3 mx-5 w-50"
                    style="max-width: 18rem;"
                >
                    <i class="card-img-top rounded pt-3 pb-3 lni {tech.img_url} text-black"></i>
                    <div class="card-body text-black">
                        <h5 class="card-title">{tech.name}</h5>
                    </div>
                </div>
            {/each}

            <button
                class="show-more-btn card border-none mb-3 mx-5 w-50"
                style="max-width: 18rem;"
                on:click={handleClickShowMore}
            >
                <i class="card-img-top rounded pt-3 pb-3 lni lni-plus text-black"></i>
                <div class="card-body text-black text-center w-100">
                    <h5 class="card-title">Show more</h5>
                </div>
            </button>

            {#if showMore == true}
                {#each techStackData.slice(maxVisible, techStackData.length) as tech (tech.id)}
                    <div
                        class="card border-none mb-3 mx-5 w-50"
                        style="max-width: 18rem;"
                    >
                        <i class="card-img-top rounded pt-3 pb-3 lni {tech.img_url} text-black"
                        ></i>
                        <div class="card-body text-black">
                            <h5 class="card-title">{tech.name}</h5>
                        </div>
                    </div>
                {/each}
            {/if}
        {/if}
    </div>
</div>

<style>
    .tech-stack-wrapper {
        background-color: #29524a;
        overflow-x: hidden;
        width: 100%;
    }

    .tech-stack-wrapper > h1 {
        font-size: 3rem;
        word-wrap: break-word;
    }

    .card > i {
        font-size: 10rem;
    }

    .card {
        background-color: rgba(0, 0, 0, 0.2);
        transition: all 0.5s ease;
    }
</style>
