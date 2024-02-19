<script>
    export let curPosObj;
    console.log(curPosObj);
</script>

<div class="cursor-div">

</div>

<style>
    * {
        height: 2vw;
        width: 2vw;
        background-color: rgba(255, 255, 255, 0.5);
        filter: blur(8px);
        border-radius: 50%;
        position: fixed;
        z-index: 999 !important;
    }
</style>