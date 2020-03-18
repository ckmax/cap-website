<template>
  <div class="full-page" v-scroll-reveal>
    <h1 class="main-text centered" v-scroll-reveal>
      Hi, I'm

      <vue-typed-js
        v-scroll-reveal
        :strings="['Capki Kim.']"
        :type-speed="100"
        :loop="false"
        :start-delay="1000"
        class="text-center typed-bar ml-6"
      >
        <v-toolbar-title v-scroll-reveal class="typing typed-text" />
      </vue-typed-js>
      <v-img
        v-scroll-reveal
        contain
        max-height="150"
        src="../assets/pinwheel.png"
      ></v-img>
    </h1>
    <!-- <v-img
        v-scroll-reveal.reset="{ delay: 250 }"
        src="../assets/cap-logo-left.svg"
        aspect-ratio="1"
        contain
        height="60vh"
        class="logo-img"
      />-->
  </div>
</template>

<script>
// export default {};
//
</script>

<style scoped>
.logo-img {
  position: absolute;
  top: 50%;
  left: 40%;
}
.centered {
  position: absolute; /* or absolute */
  top: 55%;
  left: 50%;
  /* bring your own prefixes */
  width: 90%;
  transform: translate(-50%, -50%);
}

.full-page {
  /* background: url("../assets/keyboard.jpeg") no-repeat center center fixed; */
  height: 100vh;
  position: relative;
  background-color: #f8f1ea;
  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.typed-text {
  font-weight: 500;
  font-size: 17vh !important;
  /* color: #f3a9a9; */
  color: black;
}

.typed-bar {
  font-weight: 300;
  font-size: 17vh !important;
  color: #f3a9a9;
  /* color: #b0cfe0; */
}

.main-text {
  font-weight: 300;
  font-size: 17vh;
}
</style>
