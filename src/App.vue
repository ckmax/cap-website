<template>
  <v-app>
    <!-- <v-app-bar dense>
      <v-toolbar-title class="headline text-uppercase">
        <span>Capki</span>
        <span class="font-weight-light">Kim</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>-->
    <v-app-bar
      color="transparent"
      app
      absolute
      dense
      flat
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          sm="6"
          align-self="center"
        >
          <!-- <v-img src="./assets/cap-logo-nows.svg" aspect-ratio="1" width="4vw" contain class="logo"></v-img> -->
        </v-col>
        <v-col
          sm="6"
          align-self="center"
        >
          <vue-typed-js
            :strings="['capki kim']"
            :type-speed="200"
            :loop="true"
            :start-delay="1000"
          >
            <v-toolbar-title class="typing white--text" />
          </vue-typed-js>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <Main />
      <Panels />
      <Timeline />
      <div :class="[ 'g-cursor', { 'g-cursor_hover': hover }, {'g-cursor_hide': hideCursor} ]">
        <div
          :style="cursorCircle"
          class="g-cursor__circle"
        />
        <div
          ref="point"
          class="g-cursor__point"
          :style="cursorPoint"
        />
      </div>
      <Cursor />
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Cursor from './components/Cursor.vue'
import Panels from './components/Panels.vue'
import Main from './components/Main.vue'
import Timeline from '@/components/Timeline'

export default Vue.extend({
  name: 'App',
  components: {
    Panels,
    Cursor,
    Main,
    Timeline
  },
  data: () => {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    }
  },
  computed: {
    cursorCircle () {
      return `transform: translateX(${this.xParent}px) translateY(${
        this.yParent
      }px) translateZ(0) translate3d(0, 0, 0);`
    },
    cursorPoint () {
      return `transform: translateX(${this.xChild - 3}px) translateY(${this
        .yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`
    }
  },
  mounted () {
    document.addEventListener('mousemove', this.moveCursor)
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true
    })
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false
    })
    // document.addEventListener('click', e => {
    //   this.xChild = 100
    // })
  },
  methods: {
    moveCursor (e) {
      this.xChild = e.clientX
      this.yChild = e.clientY
      setTimeout(() => {
        this.xParent = e.clientX - 15
        this.yParent = e.clientY - 15
      }, 100)
    }
  }
})
</script>

<style lang="scss">
body,
html {
  cursor: none;
  background: white;
  // background: url('./assets/keyboard.jpeg') no-repeat center center fixed;
  // height: 100vh;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
}

.g-cursor {
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #fff;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 10px;
    height: 10px;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    background: #fff;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }
  }
}

.mt-40 {
  margin-top: 5vh;
}

.logo {
  float: right;
}

.v-image__image {
  margin-left: 20px !important;
}

.v-application--wrap {
  background: url('./assets/back2.jpeg') no-repeat center center fixed;
  background-color: white;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
