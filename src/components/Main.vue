<template>
  <v-container fluid>
    <div
      class="full-page"
    >
      <!-- <v-img
        src="../assets/back2.jpeg"
        aspect-ratio="1"
        contain
        class="logo-img"
      /> -->
      <!-- <v-row
        justify="center"
        align="center"
      >
        <v-col cols="6">
          <v-img
            v-scroll-reveal.reset="{ delay: 250 }"
            src="../assets/cap-logo-left.svg"
            aspect-ratio="1"
            contain
            height="60vh"
            class="logo-img"
          />
        </v-col>
        <v-col cols="6">
          <h1 style="font-weight:300;">
            I TRY TO BE BETTER, BUT A GOOD PERSON IS NOT WHAT I AM
          </h1>
        </v-col>
      </v-row> -->
      <!-- <v-img
        v-scroll-reveal.reset="{ delay: 250 }"
        src="../assets/cap-logo-left.svg"
        aspect-ratio="1"
        contain
        height="60vh"
        class="logo-img"
      />-->
    </div>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

.logo-img {
    position: absolute;
    top: 25%;
    left: 7%;
}

.full-page {
  /* background: url('../assets/keyboard.jpeg') no-repeat center center fixed; */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
