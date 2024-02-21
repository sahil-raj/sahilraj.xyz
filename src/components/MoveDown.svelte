<script>
    document.body.onscroll = (e) => {
        let myEle = document.getElementsByClassName("holder-all");
        console.log(e);
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

    @keyframes mover {
        0% {
            margin-top: calc(10vh - 1.5rem);
        }

        25% {
            margin-top: calc(7.5vh - 1.5rem);
        }

        50% {
            margin-top: calc(5vh - 1.5rem);
        }
    }

    @keyframes move-down-holder {
        0% {
            margin-top: 0;
        }

        25% {
            margin-top: 1vh;
        }

        50% {
            margin-top: 1.5vh;
        }
    }

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
        animation: move-down-holder 1s linear infinite;
    }

    .move-down-holder:hover {
        border: 2px solid rgba(255, 255, 255, 1);
    }

    .mover {
        height: 1.5rem;
        width: 100%;
        border-radius: 50%;
        background-color: rgba(0, 0, 255, 0.5);
        filter: blur(5px);
        margin-top: calc(10vh - 1.5rem);
        transition: 0.5s ease;
        animation: mover 1s ease-in infinite;
    }

    p {
        padding-top: 2vh;
    }
</style>