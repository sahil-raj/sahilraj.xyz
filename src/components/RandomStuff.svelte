<script>
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // let randState = ["Engineer", "Developer", "Student", "Learner", "Blockchain Enthusiast"];
    // let RandCont = `<div class="rand-cont position-absolute" style="left: ${randomInt(10,90)}vw;top: ${randomInt(10,50)}vh;"><h1>${randState[randomInt(0, randState.length-1)]}</h1></div>`;

    // $: {
    //     setInterval(() => {
    //         RandCont = `<div class="rand-cont position-absolute" style="left: ${randomInt(10,90)}vw;top: ${randomInt(10,90)}vh;"><h1>${randState[randomInt(0, randState.length-1)]}</h1></div>`;
    //     }, 2000);
    // }

    let randState = [
        "Engineer",
        "Developer",
        "Student",
        "Learner",
        "Blockchain Enthusiast",
    ];

    function getHtml(x) {
        let rv = "";
        for (let i = 0; i <= x; ++i)
            rv += `<div class="rand-cont position-absolute" style="left: ${randomInt(
                0,
                95,
            )}vw;top: ${randomInt(0, 75)}vh;"><h1>${
                randState[randomInt(0, randState.length - 1)]
            }</h1></div>`;
        return rv;
    }

    let randCont = "",
        randCont2 = "";
    setInterval(() => (randCont = getHtml(2)), 2000);
    setInterval(() => (randCont2 = getHtml(2)), 1500);
</script>

<div class="wrapper">
    <div>
        <h3>WHO<span>?</span></h3>
    </div>
    <div
        class="vw-100 d-flex flex-column justify-content-center align-item-center flex-wrap"
        style="height: 75vh;"
    >
        <div>
            <h1 class="name-hindi-random fw-bold">साहिल राज</h1>
        </div>
        <div
            class="main-random position-absolute vw-100 overflow-hidden"
            style="height: 75vh;"
        >
            {@html randCont}
            {@html randCont2}
        </div>
    </div>
</div>

<style>
    .wrapper {
        background-color: #4fc3f7;
    }

    .name-hindi-random {
        font-size: 7rem;
        color: rgba(255, 255, 255, 1);
    }

    h3 > span {
        font-size: 5rem;
        margin-top: -5vh !important;
    }
</style>
