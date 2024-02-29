<script>
    // logic in MoveDown
</script>

<div class="fixed-stuff-main container-fluid">
    <div class="icon-holder position-fixed top-0 pt-3 ps-3 pe-3">
        <button
            on:click={() =>
                (window.location.href = "https://www.github.com/sahil-raj/")}
            ><i class="lni lni-github"></i></button
        >
    </div>

    <div class="icon-holder position-fixed top-0 end-0 pt-3 ps-3 pe-3">
        <button
            on:click={() =>
                (window.location.href =
                    "https://www.linkedin.com/in/sahil-raj-184a85187/")}
            ><i class="lni lni-linkedin"></i></button
        >
    </div>
</div>

<style>
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

    .fixed-stuff-main {
        z-index: 999 !important;
    }

    .lni {
        font-size: 2rem;
    }

    .icon-holder {
        transition: all 0.1s ease;
    }

    .icon-holder > button {
        border: none;
        background-color: rgba(0, 0, 0, 0);
    }

    .icon-holder > button:hover .lni {
        animation: change-color 3s ease-in-out infinite;
        font-weight: bold;
    }
</style>
