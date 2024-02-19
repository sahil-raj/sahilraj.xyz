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
    #cursor-div {
        height: 2vw;
        width: 2vw;
        background-color: rgba(255, 255, 255, 0.5);
        filter: blur(8px);
        border-radius: 50%;
        position: fixed;
        z-index: 999 !important;
    }
</style>
