<script>
    import MoveDown from "./MoveDown.svelte";
</script>

<div class="kind-of-header">
    <div><h1 id="main-h1">SAHIL RAJ</h1></div>
    <!-- साहिल राज -->
    <div class="back-header"></div>
</div>
<MoveDown />

<style>
    .back-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        filter: blur(3px);
        z-index: -1;
    }
    .kind-of-header {
        position: sticky;
        top: 0;
    }

    #main-h1 {
        text-align: center;
        font-size: 10vw;
        margin-top: 40vh;
        margin-bottom: 50vh;
        letter-spacing: 0.5vw;
        word-spacing: 1vw;
        transition: all 1s;
        z-index: 990 !important;
    }

    #main-h1:hover {
        word-spacing: 1.5vw;
        letter-spacing: 1vw;
    }
</style>
