<template>

    <div class="home-page">
        <div class="home-body">
            <h3 id="welcome-title">WELCOME TO TEKKEN</h3>
            <h3 id="ready-title">IF YOU READY</h3>
        </div>
        
        
        <div class="link">
            <router-link id="play" to="/characters">
                <h2 id="head-title">PLAY</h2>
            </router-link>
        </div>
    </div>
</template>



<script>
    

export default {

    setup() {





    }
}

</script>

<style>
body {
    background-color: rgb(50, 8, 37);
    display: flex;
    justify-content: center;
    align-items:center;
    color: aliceblue;
}

.home-page {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
}
.home-page h3 {
  overflow: hidden;
  white-space: nowrap;
  width: 0%;
}

#play {
    background-color: aliceblue;
    text-decoration: none;
    border: 0;
    color: aliceblue;
    background-color: black;
    font-size: 40px;
}

#welcome-title {
    white-space: nowrap;
    overflow: hidden;
    animation: animateWelcome 4s linear both;
    animation-delay: 0s;
    font-size: 80px;

}
#ready-title {
    white-space: nowrap;
    overflow: hidden;
    animation: animateWelcome 4s linear both;
    animation-delay: 4s;
    font-size: 70px;
    margin-left: 170px;

}

#head-title {
  white-space: nowrap;
  overflow: hidden;
  animation: animateWelcome 4s linear both;
  animation-delay: 7s;
  
  margin-right: 320px;

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