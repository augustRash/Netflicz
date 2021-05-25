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
        <img :src='"https://image.tmdb.org/t/p/w500"+tvDetail.backdrop_path' style="width=50%" class="card-img-top" alt="...">
            <div class="card-body">
    <h5 class="card-title">{{tvDetail.name}}</h5>
    <p class="card-text">{{tvDetail.overview}}</p>
  </div>
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
    <br/>
    {{companies.name}}
    </span>
    </li>
  </ul>
  <div class="card-body">
  <a :href="tvDetail.homepage" target="blank" class="card-link">Guarda</a>
  </div>
  <div class="card-body">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" :class="index=== 0 ? 'active' : ''" v-for="(creator, index) in tvDetail.created_by"
     data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :aria-current="index=== 0" aria-label="Slide 1">
    </button>
  </div>
  <div class="carousel-inner">
   
    <div class="carousel-item" :class="index === 0 ? 'active' : ''" v-for="(creator, index) in tvDetail.created_by">
      <img :src='"https://image.tmdb.org/t/p/w500"+creator.profile_path' style="width: 40% height:100%; object-fit: cover">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{creator.name}}</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  </div>
  <div>
  
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
        
        fetcher('tv/'+  this.search.id).then(detail => this.tvDetail = detail)

    }
})