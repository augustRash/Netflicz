<template>
  <form>
    <h1>Trending list</h1>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="movie in trendingList" :key="movie.id">
          <div class="col">
            <div class="card text-center">
              <img
                :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                class="card-img-top"
                style="width: 100%; height: 300px; object-fit: cover"
              />
              <div class="card-body">
                <h5 class="card-title">{{ movie.name }}</h5>

                <p class="card-text">{{ truncate(movie.overview) }}</p>

                <rating :rating="movie.vote_average"> </rating>
              </div>
              <div class="card-footer text-muted">
                <!-- <a :href="'./details.html?id='+movie.id  + '&type=tv'" class="btn btn-primary" >More details</a> -->
                <router-link
                  :to="{
                    name: 'details',
                    query: { id: movie.id, type: 'tv' },
                  }"
                  class="btn btn-primary"
                >
                  More details
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import rating from "../components/rating.vue";
import { fetcher } from "../fetcher/fetcher";
export default {
  components: { rating },
  data() {
    return {
      trendingList: [],
    };
  },
  mounted() {
    fetcher("trending/tv/week", { query: this.query }).then((response) => {
      this.trendingList = response.results;
    });
  },
  methods: {
    truncate(text) {
      return text.length > 100 ? text.substr(0, 100 - 1) + "..." : text;
    },
  },
};
</script>

<style>
</style>