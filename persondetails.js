const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const fetcher = (url, options = {}) => {
    options.api_key = apiKey;
    options.language = "it-IT";
    const queryParams = "?" + new URLSearchParams(options).toString();

    return fetch("https://api.themoviedb.org/3/" + url + queryParams)
        .then((res) => res.json())
        .catch(console.error);
};

app.component("person-detail", {
    template:
        /*html*/
        `
<div class="d-flex justify-center">
<div class="card m-auto" style="width: 25rem;">
  <img :src='"https://image.tmdb.org/t/p/w500"+person.profile_path' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{person.name}}
    <i class="fas fa-mars text-primary" v-if="person.gender==2"></i>
    
    <i v-else class="fas fa-venus text-danger"></i>
    </p>
    </h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Data di nascita: {{person.birthday}}</li>
    <li class="list-group-item">Luogo di nascita: {{person.place_of_birth}}</li>
  </ul>
  <div class="card-body">
  </div>
</div>
</div>


    `,
    data() {
        return {
            search: Object.fromEntries(new URLSearchParams(location.search)),
            person: {}
        }
    },
    mounted() {
        fetcher('person/' + this.search.id).then(detail => this.person = detail)

    },
})