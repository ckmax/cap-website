<template>
  <v-container>
    <h1 class="white--text text-center">
      Life
    </h1>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          />
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{ year.header }}
          </h2>
          <div class="white--text">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "1993",
        header: "Born",
        text: ""
      },
      {
        color: "green",
        year: "2002",
        header: "Arrival to the US",
        text: ""
      },
      {
        color: "pink",
        year: "1980",
        header: "",
        text: ""
      },
      {
        color: "amber",
        year: "1990",
        header: "",
        text: ""
      },
      {
        color: "orange",
        year: "2000",
        header: "",
        text: ""
      }
    ]
  })
};
</script>
