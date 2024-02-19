<script>
    import Cursor from "./components/Cursor.svelte";
    import NameMain from "./components/NameMain.svelte";

    let curPosObj = undefined;
</script>

<main>
    <div
        class="container-fluid"
        on:mousemove={(e) => {
            curPosObj = e;
        }}
    >
        <Cursor {curPosObj} />
        <div class="main-holder">
            <NameMain />
        </div>
    </div>
</main>

<style>
    .container-fluid {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        position: absolute;
        padding: 0 !important;
    }

    .main-holder {
        height: 200vh;
        width: 100vw;
    }
</style>
