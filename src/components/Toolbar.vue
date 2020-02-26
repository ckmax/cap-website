<template>
  <v-app-bar color="transparent" app absolute flat dark>
    <v-row align-content="center">
      <vue-typed-js
        :strings="['capki kim']"
        :type-speed="100"
        :loop="true"
        :start-delay="2000"
        class="black--text text-center typed-text ml-6"
      >
        <v-toolbar-title class="typing typed-text black--text" />
      </vue-typed-js>
      <v-spacer />
      <v-btn light text tile :ripple="false" class="ma-8" v-scroll-to="'#life'"
        ><span class="hvr-underline-from-left">Life</span></v-btn
      >
      <v-btn light text tile class="ma-8" v-scroll-to="'#projects'"
        ><span class="hvr-underline-from-left">Projects</span></v-btn
      >
      <v-btn light text tile class="ma-8"
        ><span class="hvr-underline-from-left">Over time</span></v-btn
      >
    </v-row>
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
</style>
