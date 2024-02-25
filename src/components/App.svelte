<script>
    import Cursor from "./Cursor.svelte";
    import FixedStuff from "./FixedStuff.svelte";
    import NameMain from "./NameMain.svelte";
    import RandomStuff from "./RandomStuff.svelte";
    import TechStack from "./TechStack.svelte";

    let curPosObj = undefined;

    const supabaseU = supabase.createClient(
        "https://fwnyrdapohecdztteehc.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bnlyZGFwb2hlY2R6dHRlZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyOTQwNzcsImV4cCI6MjAyMzg3MDA3N30.4hphr8LKjjZ0K2KolDk0VvWuL1zz0ohq9MIYA0Ldl1o",
    );

    // // store components in variables
    // const page = document.querySelector(".page");
    // const wrapper = document.querySelector(".main-holder");

    // // ease value to be used in interpolation
    // const ease = 0.05; // 20%

    // // create an object to store scroll details
    // const scroll = {
    //     current: 0, // current scroll position
    //     target: 0, // target scroll position
    //     limit: 0, // limit of scroll
    // };

    // // function to update target scroll position
    // const updateTarget = (e) => {
    //     // set the target value to deltaY
    //     // which is distance covered by mouseWheel
    //     scroll.target += e.deltaY;
    // };

    // // create an event listener to listen for mouse-wheel
    // document.addEventListener("mousewheel", updateTarget);

    // // linear interpolation function
    // const lerp = (current, target) => {
    //     // get distance between current & target scroll points
    //     const distanceBetween = target - current;

    //     // get a percentage of that distance, in this case 20%
    //     const distanceToTravel = distanceBetween * ease;

    //     // add the % distance to the current scroll value
    //     return current + distanceToTravel;

    //     // shorthand for lerp is
    //     // current = current + ((target - current) * ease)
    // };

    // // clamping function to limit mousewheel values
    // const clamp = (min, max, value) => {
    //     const clamped = Math.min(Math.max(value, min), max);
    //     return clamped;
    // };

    // // main scroll function
    // const smoothScroll = () => {
    //     const maxScroll = wrapper.clientHeight - window.innerHeight;
    //     // clamp scroll target value
    //     scroll.target = clamp(0, maxScroll, scroll.target);

    //     const { current, target } = scroll;

    //     const transition = lerp(current, target);
    //     scroll.current = transition;

    //     // translate page wrapper based on lerped value
    //     wrapper.style.transform = `translateY(-${scroll.current}px)`;

    //     // use requestAnimationFrame with callback
    //     // to create an infinite loop of this function
    //     // that updates 60 times per second
    //     // or 30 times per second
    //     // depending on browser refresh rate
    //     window.requestAnimationFrame(smoothScroll);
    // };

    // // call smoothScroll to start loop
    // smoothScroll();
</script>

<main class="page">
    <div
        class="container-fluid vh-100 vw-100 position-absolute"
        on:mousemove={(e) => {
            curPosObj = e;
        }}
    >
        <Cursor {curPosObj} />
        <div class="main-holder">
            <FixedStuff />
            <NameMain />
            <div class="content-holder">
                <!-- enter content here -->
                <div style="background-color: #4fc3f7;">
                    <svg viewBox="0 0 500 200">
                        <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
                        ></path>
                    </svg>
                </div>
                <RandomStuff />
                <!-- <svg style="background-color: #29b6f6;" viewBox="0 0 500 200">
                    <path fill="#4fc3f7" d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"
                    ></path>
                </svg> -->
                <TechStack />
            </div>
        </div>
    </div>
</main>

<style>
    .container-fluid {
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        padding: 0 !important;
    }
</style>
