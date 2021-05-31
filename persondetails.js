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
<div class="card text-center">
  <div class="card" v-for="person in tvDetail.created_by">
  <img :src='"https://image.tmdb.org/t/p/w500"+person.profile_path'  style="width: 18rem;" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"></p>
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