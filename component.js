const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const fetcher = (url, options = {}) => {
  options.api_key = apiKey;
  options.language = "it-IT";
  const queryParams = "?" + new URLSearchParams(options).toString();

  return fetch("https://api.themoviedb.org/3/" + url + queryParams)
    .then((res) => res.json())
    .catch(console.error);
};

app.component("item-detail", {
  template:
    /*html*/
    `
    <div class='container d-flex justify-content-center'>
    <div class="card" style="width: 40rem;">
        <img :src='"https://image.tmdb.org/t/p/w500"+tvDetail.backdrop_path' style="width=50%" class="card-img-top"
            alt="...">
        <h5 class="card-title">{{tvDetail.name}}</h5>
        <p class="card-text">{{tvDetail.overview}}</p>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <span class="badge bg-primary ms-1" v-for="genre in tvDetail.genres">
                    {{genre.name}}
                </span>
            </li>
            <li class="list-group-item">
                Data di rilascio: {{tvDetail.first_air_date}}

            </li>
            <li class="list-group-item">
                Stagioni: {{tvDetail.number_of_seasons}}
            </li>
            <li class="list-group-item">
                Episodi: {{tvDetail.number_of_episodes}}
            </li>
            <li class="list-group-item">
                Ultimo rilascio: {{tvDetail.last_air_date}}
            </li>
            <li class="list-group-item">
                <rating :rating="tvDetail.vote_average" />
            </li>
            <li class="list-group-item">
                <span class="ms-1" v-for="companies in tvDetail.production_companies">
                    <br />
                    {{companies.name}}
                </span>
            </li>
            <li class="list-group-item" v-if="tvDetail.homepage">

                <a :href="tvDetail.homepage" target="blank" class="card-link">Link homepage ({{
                    getHomepage(tvDetail.homepage)
                    }})</a>

            </li>
        </ul>
        <div class="card-body">
            <h3 v-if="tvDetail.created_by.length">Creatori </h3>

            <div class="card-group" v-if="tvDetail.created_by.length">
                <div class="card" v-for="creator in tvDetail.created_by">
                    <img v-if="creator.profile_path" :src='"https://image.tmdb.org/t/p/original"+creator.profile_path'
                        class="rounded mx-auto d-block" style="max-width: 15rem; " class="card-img-top " alt="...">
                    <div class="card-body">
                        <div class="text-center">
                            <h5> {{creator.name}} </h5>

                        </div>
                    </div>
                    <div class="card-footer">
                        <a :href="'./person.html?id='+creator.id" class="btn btn-primary">More details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  data() {
    return {
      search: Object.fromEntries(new URLSearchParams(location.search)),
      tvDetail: {}
    }
  },
  mounted() {

    fetcher(this.search.type + '/' + this.search.id).then(detail => this.tvDetail = detail)

  },
  methods: {

    getHomepage(url) {
      return url.split('.')[1]

    }
  }
})
