<script>
    export let loadPercentage = 10;
    export let statusText = "uc";
</script>

<div>
    <div class="loader-body">
        <div class="loader" style="width: {loadPercentage}%;"></div>
        <p class="load-per">{loadPercentage}%</p>
    </div>
    <h4 class="status-text">{statusText}</h4>
    <a href="https://github.com/sahil-raj/sahilraj.xyz">Check updates</a>
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

    @keyframes change-color {
        0% {
            background-color: rgba(0, 0, 255, 1);
        }
        25% {
            background-color: rgba(225, 0, 255, 1);
        }
        50% {
            background-color: rgba(255, 0, 0, 1);
        }
        100% {
            background-color: rgba(0, 255, 0, 1);
        }
    }

    .loader {
        height: 100%;
        border-radius: 9999px;
        background-color: blue;
        animation: change-color 5s linear infinite;
    }

    .load-per {
        margin-top: 3vh;
    }

    h4 {
        margin-top: 8vh;
        margin-bottom: 10vh;
    }

    a {
        padding-bottom: 15vh !important;
    }
</style>