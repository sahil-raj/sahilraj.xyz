<script>
    export let projectsData = [];
</script>

<div class="projects-wrapper">
    <h1 class="pt-5 pb-5">Projects</h1>
    <div>

        {#each projectsData as project (project.id)}
        <div class="card mb-3" style="max-width: 50vw;">
            <div class="row g-0">
                <div class="col-md-4 m-auto">
                    <img src={project.img_src} class="img-fluid rounded-start" alt={project.name} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-dark">{project.name}</h5>
                        <p class="card-text text-secondary">
                            {project.description}
                        </p>
                        <h3 class="card-text">
                            <a href={project.github_link} class="text-secondary"><i class="lni lni-github"></i></a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        {:else}
        <h3 class="text-dark">Working on it...</h3>
        <p class="text-dark">check again later</p>
        {/each}

    </div>
</div>

<style>
    .projects-wrapper {
        background-color: #4fc3f7;
        padding-bottom: 5rem;
        z-index: 9;
        width: 100%;
    }

    .card {
        margin: auto;
    }
</style>
