<template>
  <nav-bar></nav-bar>
  <div class="container">
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg"></span>
      <input
        class="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="inputGroup-sizing-lg"
        v-model="query"
        @input="searching"
      />
      <button class="btn btn-outline-success" @click="searching">Search</button>
    </div>
    <div class="list-group">
      <p v-if="searchResults == 0 && query" class="">Non ci sono risultati</p>
      <search-spec
        v-for="movie in searchResults"
        :item="movie"
        :key="movie.id"
      />
    </div>
  </div>
</template>
<script>
import searchSpec from "../components/searchSpec.vue";
import { fetcher } from "../fetcher/fetcher";
export default {
  components: { searchSpec },
  data() {
    return { query: "", searchResults: [] };
  },
  methods: {
    searching() {
      fetcher("search/multi", { query: this.query }).then((response) => {
        console.log(response);
        this.searchResults = response.results;
      });
    },
  },
};
</script>

