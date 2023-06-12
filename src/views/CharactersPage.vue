<template>
    <div id="character-title">
        <h1>CHOOSE A CHARACTER</h1>
    </div>
    <div class="characters">
        <div><img src="@/assets/00.png" alt=""></div>
        <div><img src="@/assets/01.jpg" alt=""></div>
        <div><img src="@/assets/02.jpg" alt=""></div>
        <div><img src="@/assets/03.jpg" alt=""></div>
        <div><img src="@/assets/04.jpg" alt=""></div>
    </div>
</template>

<style>
    .characters {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 200px;
        gap: 20px;

    }
    .characters div {
        width: 200px;
        height: 200px;
        background-color: #ffff;
        cursor: pointer;
    }

    .characters img {
        width: 200px;
        height: 200px;
        
    }

    #character-title {
        white-space: nowrap;
        overflow: hidden;
        animation: animateWelcome 4s linear;
        text-align: center;
        margin-top: 100px;
    }

    @keyframes animateWelcome {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}


</style>