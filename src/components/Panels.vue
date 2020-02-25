<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card
              v-scroll-reveal.reset="{ delay: 100 }"
              tile
              :elevation="hover ? 12 : 2"
              class="mx-auto"
              height="50vh"
              color="grey"
            >
              <!-- <v-img src="../assets/cnb.jpeg" height="40vh" width="40vw">
            </v-img> -->
            </v-card>
          </v-hover>
        </v-col>
        <v-col sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card
              v-scroll-reveal.reset="{ delay: 100 }"
              tile
              :elevation="hover ? 12 : 2"
              class="mx-auto"
              height="50vh"
              color="grey"
            >
              <!-- <v-img src="../assets/cnb.jpeg" height="40vh" width="40vw">
            </v-img> -->
            </v-card>
          </v-hover>
        </v-col>
        <v-col sm="6" color="blue">
          <v-card
            v-scroll-reveal.reset="{ delay: 150 }"
            hover
            tile
            height="50vh"
          >
            <!-- <v-img src="../assets/guitar.jpeg" height="60vh">
            </v-img> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col lg="6" sm="12" color="blue">
          <v-card
            v-scroll-reveal.reset="{ delay: 100 }"
            hover
            tile
            height="50vh"
          >
            <!-- <v-img src="../assets/praise_team.jpeg" height="40vh" width="40vw">
            </v-img> -->
          </v-card>
        </v-col>
        <v-col lg="6" sm="12" color="blue">
          <v-card
            v-scroll-reveal.reset="{ delay: 150 }"
            hover
            tile
            ripple
            height="50vh"
          >
            <!-- <v-img src="../assets/spain.jpeg" height="40vh" width="40vw">
            </v-img> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.container {
  padding: 0px;
}
</style>
