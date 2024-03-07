<script>

    const ishi = [
        "#NeverStopBuilding",
        "#buidl",
        "#CoffeAndCode",
        "#TouchTheSkyWithGlory",
        "सीधे मौत के बिना क्या जीवन है"
    ];

    let hashVal = ishi[randomInt(0, ishi.length)];

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setInterval(() => {
        hashVal = ishi[randomInt(0, ishi.length-1)];
    }, 3000);
</script>

<footer>
    <h3 class="hash-text text-secondary pt-3">{hashVal}</h3>
    <p class="text-secondary">made with <i class="lni lni-heart"></i> and svelte</p>
</footer>

<style>
    footer {
        min-height: 5rem;
        width: 100%;
    }

    .hash-text {
        transition: all 0.5s;
    }
</style>