<script>
    import Cursor from "./components/Cursor.svelte";

    let curPosObj;
</script>

<main>
    <div on:mousemove={(e) => {curPosObj = e}} class="container-fluid">
        <Cursor curPosObj={curPosObj}/>
        <h1 id="main-h1">SAHIL RAJ</h1>
    </div>    
</main>

<style>
    .container-fluid {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        position: absolute;
    }

    #main-h1 {
        text-align: center;
        font-size: 10vw;
        margin-top: 40vh;
        letter-spacing: 0.5vw;
        word-spacing: 1vw;
    }
</style>