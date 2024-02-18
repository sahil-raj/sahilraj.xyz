<script>
    export let loadPercentage = 10;
</script>

<div>
    <div class="loader-body">
        <div class="loader" style="width: {loadPercentage}%;"></div>
    </div>
</div>

<style>
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