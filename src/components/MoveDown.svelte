<script>
    let start, ele, start2, ele2;
    document.body.onload = (e) => {
        let currBodyScroll = document.documentElement.scrollTop
            ? document.documentElement.scrollTop
            : document.body.scrollTop;

        ele = document.getElementById("holder-all");
        ele2 = document.querySelectorAll(".icon-holder");

        if (currBodyScroll == 0) {
            start = ele.getBoundingClientRect().top;
            console.log(start);
            start2 = ele2[0].getBoundingClientRect().top;
            console.log(start2);
        } else {
            console.log("this triggred");
            start2 = 0;
            start = window.innerHeight*0.8;//reps 80vh
            console.log(start, start2)
        }
        ele.addEventListener("click", (e) => {
            let vh = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0,
            );
            window.scrollTo(0, vh);
            document.getElementById("main-h1").style.fontSize = "5vw";
        });
    };

    document.body.onscroll = (e) => {
        let curr = ele.getBoundingClientRect().top;
        // document.getElementById("main-h1").style.letterSpacing = `${Math.floor(curr/start)}vw`;
        let curr2 = ele2[0].getBoundingClientRect().top;
        ele.style.opacity = `${Math.floor((curr / start) * 100)}%`;

        ele2.forEach((e) => {
            if (100 - Math.floor((curr / start) * 100) <= 90)
                e.style.marginTop = `${
                    100 - Math.floor((curr / start) * 100)
                }vh`;
        });
    };
</script>

<div>
    <div id="holder-all" class="holder-all">
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
        opacity: 100%;
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
