<template>
  <br />
  <p>
    Rating:
    <span class="container text-warning">
      <i v-for="(star, i) in stars" :class="star" :key="i"></i>
    </span>
  </p>
</template>
<script>
export default {
  props: {
    rating: Number,
  },
  name: "rating",
  computed: {
    stars() {
      // this.rating // numero 0-10
      const realRating = this.rating / 2;
      let starArray = new Array(5).fill("far fa-star");
      let index = 0;
      while (realRating > index + 1) {
        starArray[index] = "fas fa-star";
        index++;
      }

      return starArray;
    },
  },
};
</script>