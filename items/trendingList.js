const apiKey = "6f9286d54de4891ea7a5c91779e09786";

const fetcher = (url, options = {}) => {
    options.api_key = apiKey;
    options.language = "it-IT";
    const queryParams = "?" + new URLSearchParams(options).toString();

    return fetch("https://api.themoviedb.org/3/" + url + queryParams)
        .then((res) => res.json())
        .catch(console.error);
}



app.component('trendingList', {

    template:
        /*html*/
        `
        <form>
            <h1> Trending list </h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div v-for="movie in trendingList">
                        <div class="col">
                            <div class="card text-center">
                            <img :src="'https://image.tmdb.org/t/p/original'+movie.poster_path" class="card-img-top" style="width:100%; height:300px; object-fit: cover">
                                <div class="card-body">
                                    
                                    <h5 class="card-title">{{movie.name}}</h5>
                                    
                                    <p class="card-text">{{ truncate(movie.overview) }}</p>
                                   
                                    <rating :rating="movie.vote_average"> </rating>     
                                </div>
                                <div class="card-footer text-muted">
                                            <a :href="'./details.html?id='+movie.id" class="btn btn-primary">More details</a>
                                </div>
                        </div>
                        
                    </div>
                </div> 
            </div>  
        </form>
        `,
    data() {
        return {
            trendingList: []

        }
    },
    mounted() {
        fetcher('trending/tv/week').then(response => {

            this.trendingList = response.results
        })
    },
    methods:{
        truncate(text){
            return (text.length > 100) ? text.substr(0, 100-1) + '...' : text;

        }

    }



})
