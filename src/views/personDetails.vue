<template>
  <div class="d-flex justify-center">
    <div class="card m-auto" style="width: 25rem">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + person.profile_path"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          {{ person.name }}
          <i class="fas fa-mars text-primary" v-if="person.gender == 2"></i>

          <i v-else class="fas fa-venus text-danger"></i>
        </h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Data di nascita: {{ person.birthday }}</li>
        <li class="list-group-item">
          Luogo di nascita: {{ person.place_of_birth }}
        </li>
      </ul>
      <div class="card-body"></div>
    </div>
  </div>
</template>
<script>
import { fetcher } from "../fetcher/fetcher";
export default {
  data() {
    return {
      search: Object.fromEntries(new URLSearchParams(location.search)),
      person: {},
    };
  },
  mounted() {
    fetcher("person/" + this.$route.query.id ).then(
      (detail) => (this.person = detail)
    );
  },
};
</script>