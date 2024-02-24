<script>
    //scroll logic in MoveDown.svelte
</script>

<div
    class="position-fixed d-flex top-0 start-0 vh-100 vw-100 flex-row justify-content-between holder-random-main"
>
    <div class="icon-holder pt-3 ps-3 pe-3"><i class="lni lni-github"></i></div>
    <div class="icon-holder pt-3 ps-3 pe-3"><i class="lni lni-linkedin"></i></div>
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

    .lni:hover {
        animation: change-color 3s ease-in-out infinite;
        font-weight: bold;
    }

    .icon-holder {
        transition: all 0.1s ease;
    }
</style>
