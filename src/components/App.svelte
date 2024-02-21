<script>
    import Cursor from "./Cursor.svelte";
    import NameMain from "./NameMain.svelte";
    import RandomStuff from "./RandomStuff.svelte";

    let curPosObj = undefined;

    const supabaseU = supabase.createClient(
        "https://fwnyrdapohecdztteehc.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bnlyZGFwb2hlY2R6dHRlZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyOTQwNzcsImV4cCI6MjAyMzg3MDA3N30.4hphr8LKjjZ0K2KolDk0VvWuL1zz0ohq9MIYA0Ldl1o",
    );
</script>

<main>
    <!-- <div class="roatate-div">
        <h1 class="rotate-h1">PLEASE ROTATE YOUR DEVICE!</h1>
    </div> -->
    <div
        class="container-fluid"
        on:mousemove={(e) => {
            curPosObj = e;
        }}
    >
        <Cursor {curPosObj} />
        <div class="main-holder">
            <NameMain />
            <div class="content-holder">
                <!-- enter content here -->
                <RandomStuff />
                <div style="height: 100vh;background-color:#29b6f6;">
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    
    .container-fluid {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.7);
        margin: 0 !important;
        position: absolute;
        padding: 0 !important;
    }

    /* .main-holder {
        height: 200vh;
        width: 100vw;
    } */
</style>
