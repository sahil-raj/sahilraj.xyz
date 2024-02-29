<script>

    const ishi = [
        "#NeverStopBuilding",
        "#buidl",
        "#CoffeAndCode",
        "#TouchTheSkyWithGlory",
        "सीधे मौत के बिना क्या जीवन है"
    ];

    let hashVal;

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    hashVal = ishi[randomInt(0, ishi.length)];

    setInterval(() => {
        hashVal = ishi[randomInt(0, ishi.length-1)];
    }, 3000);
</script>

<footer class="vw-100">
    <h3 class="hash-text text-secondary pt-3">{hashVal}</h3>
    <p class="text-secondary">made with <i class="lni lni-heart"></i> and svelte</p>
</footer>

<style>
    footer {
        min-height: 5rem;
    }

    .hash-text {
        transition: all 0.5s;
    }
</style>