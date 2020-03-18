<template>
  <div class="home">
    <Page />
    <v-container fluid>
      <v-row>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
        <v-col>
          <Panel />
        </v-col>
      </v-row>
      <v-row no-gutters>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import Page from "@/components/Page";

export default {
  name: "Home",
  components: {
    Panel,
    Page
  }
};
</script>

<style scoped>
.container {
  padding: 0px;
}
</style>
