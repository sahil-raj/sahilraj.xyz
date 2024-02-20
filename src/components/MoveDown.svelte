<script></script>

<div class="main-move-down">
    <div class="main-div-holder">
        <div class="div-mover"></div>
    </div>
    <p>KNOW MORE</p>
</div>

<style>
    p {
        position: absolute;
        top: 91vh;
        left: 10px;
        width: 99%;
    }
    .main-div-holder {
        height: 10vh;
        width: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 80vh;
        left: 50%;
        z-index: 9;
        border-radius: 999px;
    }

    .main-div-holder:hover {
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .div-mover {
        z-index: 9;
        height: 1.5rem;
        width: 100%;
        background-color: rgba(0, 0, 255, 0.5);
        border: 1px solid white !important;
        border-radius: 100%;
        filter: blur(5px);
    }

    .div-mover:hover {
        background-color: (0, 0, 255, 1);
    }
</style>