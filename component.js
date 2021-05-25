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
  
  </div>

  
  
  <div class="card-group">
  <div class="list-group-item">
  <span class: v-for="creator in tvDetail.created_by">
  
    <img :src='"https://image.tmdb.org/t/p/original"+creator.profile_path' class="card-img-top" alt="...">
    <div class="card-body">
      <h5> {{creator.name}} </h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </span>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
        
        fetcher('tv/'+  this.search.id).then(detail => this.tvDetail = detail)

    }
})