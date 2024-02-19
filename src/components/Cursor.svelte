<script>
    export let curPosObj;
    $: {
        let ele = document.getElementById("cursor-div");
        if (curPosObj) {
            ele.style.top = curPosObj.y + "px";
            ele.style.left = curPosObj.x + "px";
        }
    }
</script>

<div id="cursor-div"></div>

<style>
    @keyframes change-color {
        33% {
            background-color: rgba(0, 0, 255, 0.5);
        }
        66% {
            background-color: rgba(0, 255, 0, 0.5);
        }
        99% {
            background-color: rgba(225, 0, 255, 0.5);
        }
    }

    #cursor-div {
        height: 2vw;
        width: 2vw;
        background-color: rgba(255, 255, 255, 0.5);
        filter: blur(8px);
        border-radius: 50%;
        position: fixed;
        z-index: 999 !important;
        animation: change-color 5s ease-in-out infinite;
    }
</style>
