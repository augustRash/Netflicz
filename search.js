const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const fetcher = (url, options = {}) => {
    options.api_key = apiKey;
    options.language = "it-IT";
    const queryParams = "?" + new URLSearchParams(options).toString();

    return fetch("https://api.themoviedb.org/3/" + url + queryParams)
        .then((res) => res.json())
        .catch(console.error);
}

app.component('search', {

    template:
        /*html*/
        `
    <nav-bar></nav-bar>
    <div class="container">
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg"></span>
            <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" aria-describedby="inputGroup-sizing-lg" v-model="query" @input="searching">
            <button class="btn btn-outline-success" @click="searching">Search</button>
        </div>
        <div class="list-group">
            <p v-if="searchResults==0 && query" class=>Non ci sono risultati</p>
                <a :href="'./details.html?id='+movie.id" class="list-group-item list-group-item-action" aria-current="true"  v-for="movie in searchResults" class="">{{movie.name}}
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"></h5>
                    </div>
                    <p class="mb-1">{{movie.overview}}</p>
                </a>
        </div>
    </div>
    
     `,
    data() {

        return { query: '', searchResults: [] }
    },
    methods: {
        searching() {
            fetcher('search/multi', { query: this.query }).then(response => {

                console.log(response)
                this.searchResults = response.results
            })



        }

    }

})