<script>
    import MoveDown from "./MoveDown.svelte";
</script>

<div class="kind-of-header position-sticky top-0">
        <h1 class="position-relative" id="main-h1">
            <span>S</span><span>A</span><span>H</span><span>I</span><span
                >L</span
            > <span>R</span><span>A</span><span>J</span>
        </h1>
    <!-- साहिल राज -->
    <div
        class="back-header position-absolute top-0 start-0 end-0 bottom-0"
    ></div>
</div>
<MoveDown />

<style>
    .back-header {
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        z-index: 990;
    }

    #main-h1 {
        text-align: center;
        font-size: 10vw;
        margin-top: 40vh;
        margin-bottom: 50vh;
        letter-spacing: 0.5vw;
        word-spacing: 1vw;
        transition: all 1s;
        z-index: 999 !important;
    }

    #main-h1:hover {
        word-spacing: 1.5vw;
        letter-spacing: 1vw;
    }

    .kind-of-header {
        z-index: 999 !important;
    }
</style>
