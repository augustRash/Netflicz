app.component('rating', {
    props: {
        rating: Number
    },
    template:
        /*html*/
    `<form>
        <br>
        <p>Rating:</p>
        <div class="container text-warning">     
            <i v-for="star in stars" :class="star" />
        </div>
    </form> 
    `,
    computed: {
        stars() {
            // this.rating // numero 0-10
            const realRating = this.rating / 2
            let starArray = new Array(5).fill("far fa-star")
            let index = 0;
            while (realRating > (index + 1)) {

                starArray[index] = "fas fa-star";
                index++

            }

            return starArray
        }
    }
})
