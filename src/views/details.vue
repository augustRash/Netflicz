<template>
  <div class="container d-flex justify-content-center">
    <div class="card" style="width: 40rem">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + tvDetail.backdrop_path"
        style="width=50%"
        class="card-img-top"
        alt="..."
      />
      <h5 class="card-title">{{ tvDetail.name }}</h5>
      <p class="card-text">{{ tvDetail.overview }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span
            class="badge bg-primary ms-1"
            v-for="genre in tvDetail.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </span>
        </li>
        <li class="list-group-item">
          Data di rilascio: {{ tvDetail.first_air_date }}
        </li>
        <li class="list-group-item">
          Stagioni: {{ tvDetail.number_of_seasons }}
        </li>
        <li class="list-group-item">
          Episodi: {{ tvDetail.number_of_episodes }}
        </li>
        <li class="list-group-item">
          Ultimo rilascio: {{ tvDetail.last_air_date }}
        </li>
        <li class="list-group-item">
          <rating :rating="tvDetail.vote_average" />
        </li>
        <li class="list-group-item">
          <span
            class="ms-1"
            v-for="(companies, i) in tvDetail.production_companies"
            :key="i"
          >
            <br />
            {{ companies.name }}
          </span>
        </li>
        <li class="list-group-item" v-if="tvDetail.homepage">
          <a :href="tvDetail.homepage" target="blank" class="card-link"
            >Link homepage ({{ getHomepage(tvDetail.homepage) }})</a
          >
        </li>
      </ul>
      <div class="card-body" v-if="tvDetail.created_by && tvDetail.created_by.length">
        <h3 >Creatori</h3>
        <div class="card-group" >
          <div
            class="card"
            v-for="(creator, i) in tvDetail.created_by"
            :key="i"
          >
            <img
              v-if="creator.profile_path"
              :src="
                'https://image.tmdb.org/t/p/original' + creator.profile_path
              "
              class="rounded mx-auto d-block"
              style="max-width: 15rem"
            />
            <div class="card-body">
              <div class="card text-center">
                <h5>{{ creator.name }}</h5>
              </div>
              <div class="card-footer">
                <!-- <a> 
                  <router-link to="'/personDetails?id='+ creator.id" class="btn btn-primary">More details</router-link>
                </a>   -->
                <router-link
                  :to="{
                    name: 'personDetails',
                    query: { id: creator.id },
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
  </div>
</template>
<script>

import rating from "../components/rating.vue";
import { fetcher } from "../fetcher/fetcher";
export default {
  components: { rating },
  data() {
    return {
      tvDetail: {},
    };
  },
  mounted() {
    fetcher(this.$route.query.type + "/" + this.$route.query.id).then(
      (detail) => (this.tvDetail = detail)
    );
  },
  methods: {
    getHomepage(url) {
      return url.split(".")[1];
    },
  },
};
</script>
