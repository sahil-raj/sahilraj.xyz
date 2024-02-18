<script>
    export let loadPercentage = 10;
    let currPercentage = 0;
</script>

<div>
    <div class="loader-body">
        <div class="loader" style="width: {loadPercentage}%;"></div>
        <p class="load-per">{loadPercentage}%</p>
    </div>
    <h4>working on it...</h4>
</div>

<style>
    * {
        text-align: center;
    }

    .loader-body {
        height: 3vh;
        width: 50vw;
        background-color: aliceblue;
        margin: auto;
        border-radius: 9999px;
    }

    .loader {
        height: 100%;
        background-color: blue;
        border-radius: 9999px;
    }
</style>