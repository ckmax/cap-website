<template>
  <div class="full-page">
    <h1 v-scroll-reveal class="project-title">
      MUSIC
    </h1>
    <v-card
      v-scroll-reveal
      hover
      tile
      class="main-card"
      height="80%"
      width="50%"
    >
      <v-img
        v-scroll-reveal
        src="../assets/new_york_2.jpeg"
        height="50%"
      ></v-img>
      <!-- <v-img
        src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
      ></v-img> -->
      <v-card-text v-scroll-reveal>
        <h2 class="">Cap - Darkest Night</h2>
        This is the first song that I've written.
      </v-card-text>

      <v-card-title>
        <!-- <v-rating
          :value="4"
          dense
          color="orange"
          background-color="orange"
          hover
          class="mr-2"
        ></v-rating>
        <span class="primary--text subtitle-2">64 Reviews</span> -->
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-card {
  position: absolute;
  top: 10%;
  right: 5%;
}

.project-title {
  transform: rotate(-90deg);
  position: absolute;
  bottom: 30%;
  left: -7%;
  font-size: 20vh;
}
</style>
