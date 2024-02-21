<script>
    document.body.onscroll = (e) => {
        // console.log(e);
    }
</script>

<div>
    <div class="holder-all">
        <div class="move-down-holder">
            <div class="mover"></div>
        </div>
        <p>KNOW MORE</p>
    </div>
</div>

<style>
    .holder-all {
        position: absolute;
        text-align: center;
        width: 100%;
        top: 80vh;
        padding: 0 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .move-down-holder {
        height: 10vh;
        width: 1.5rem;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 999px;
    }

    .mover {
        height: 1.5rem;
        width: 100%;
        border-radius: 50%;
        background-color: rgba(0, 0, 255, 0.5);
        filter: blur(5px);
        margin-top: calc(10vh - 1.5rem) !important;
    }

    p {
        padding-top: 2vh;
    }
</style>