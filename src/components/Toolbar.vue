<template>
  <v-app-bar
    v-scroll-reveal.reset="{ delay: 3000 }"
    color="transparent"
    height="125"
    flat
    dark
  >
    <v-container fluid>
      <v-row justify="space-between" align="center">
        <v-col lg="2" md="2" sm="4" class="mt-4">
          <v-img
            v-scroll-reveal.reset="{
              rotate: {
                x: 100,
                y: 0,
                z: 0
              },
              origin: 'top'
            }"
            src="../assets/logo.png"
            contain
            max-height="120"
          />
        </v-col>
        <!-- <v-col lg="2" md="3" sm="2">
          <vue-typed-js
            :strings="['capki kim']"
            :type-speed="100"
            :loop="true"
            :start-delay="2000"
            class="black--text text-center typed-text ml-6"
          >
            <v-toolbar-title class="typing typed-text black--text" />
          </vue-typed-js>
        </v-col> -->
        <v-col v-scroll-reveal.reset="{ origin: 'top' }" lg="8">
          <v-row justify="space-around" no-gutters>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn
                light
                text
                tile
                :ripple="false"
                class=""
                v-scroll-to="'#life'"
                ><span class="hvr-underline-from-left">home</span></v-btn
              >
            </v-col>
            <v-col>
              <v-btn light text tile class="" v-scroll-to="'#projects'"
                ><span class="hvr-underline-from-left">Projects</span></v-btn
              >
            </v-col>
            <v-col>
              <v-btn light text tile
                ><span class="hvr-underline-from-left">Over time</span></v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
/**
    Using http://ianlunn.github.io/Hover/
*/
// Change style of typed text
.typed-text {
  font-weight: 500;
  font-size: 30px !important;
}

/* Underline From Left */
.hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 85%;
  bottom: 0;
  background: black;
  height: 1px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before,
.hvr-underline-from-left:focus:before,
.hvr-underline-from-left:active:before {
  right: 0;
}

.theme--light.v-btn:hover::before {
  opacity: 0;
}

.rotate3d {
  transform: rotate3d(1, 1, 1, 45deg);
}
</style>
