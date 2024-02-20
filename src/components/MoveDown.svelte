<script></script>

<div class="main-move-down">
    <div class="main-div-holder">
        <div class="div-mover"></div>
    </div>
    <p>KNOW MORE</p>
</div>

<style>
    .main-move-down {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 0;
    }

    p {
        position: relative !important;
        top: 82vh;
    }

    .main-div-holder {
        height: 10vh;
        width: 1.5rem;
        border: 2px solid rgba(255, 255, 255, 0.5);
        position: relative !important;
        z-index: 9;
        border-radius: 999px;
        left: 50%;
        top: 80vh;
    }

    .div-mover {
        z-index: 9;
        height: 1.5rem;
        width: 100%;
        background-color: rgba(0, 0, 255, 0.5);
        border-radius: 100%;
        filter: blur(5px);
    }
</style>