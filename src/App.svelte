<script>
    import Cursor from "./components/Cursor.svelte";
    import NameMain from "./components/NameMain.svelte";

    let curPosObj = undefined;

    const supabaseU = supabase.createClient('https://fwnyrdapohecdztteehc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bnlyZGFwb2hlY2R6dHRlZWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyOTQwNzcsImV4cCI6MjAyMzg3MDA3N30.4hphr8LKjjZ0K2KolDk0VvWuL1zz0ohq9MIYA0Ldl1o');

    
</script>

<main>
    <div
        class="container-fluid"
        on:mousemove={(e) => {
            curPosObj = e;
        }}
    >
        <Cursor {curPosObj} />
        <div class="main-holder">
            <NameMain />
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

    .main-holder {
        height: 200vh;
        width: 100vw;
    }
</style>
