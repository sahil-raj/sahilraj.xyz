<script>
    //logic in MoveDown
</script>

<div
    class="position-fixed d-flex top-0 start-0 vw-100 flex-row justify-content-between holder-random-main"
>
    <div class="icon-holder pt-3 ps-3 pe-3"><button on:click={() => window.location.href = "https://www.github.com/sahil-raj/"}><i class="lni lni-github"></i></button></div>
    <div class="icon-holder pt-3 ps-3 pe-3"><button on:click={() => window.location.href = "https://www.linkedin.com/in/sahil-raj-184a85187/"}><i class="lni lni-linkedin"></i></button></div>
</div>

<style>
    .holder-random-main {
        z-index: 999;
    }

    .lni {
        font-size: 2rem;
    }

    @keyframes change-color {
        33% {
            color: rgba(0, 0, 255, 0.7);
        }
        66% {
            color: rgba(0, 255, 0, 0.7);
        }
        99% {
            color: rgba(225, 0, 255, 0.7);
        }
    }

    .icon-holder {
        transition: all 0.1s ease;
    }

    .icon-holder>button {
        border: none;
        background-color: rgba(0, 0, 0, 0);
    }

    .icon-holder>button:hover .lni {
        animation: change-color 3s ease-in-out infinite;
        font-weight: bold;
    }
</style>
