app.component('searchSpec', {
    props: {
        item: Object
    },
    template:
        /*html*/
        `
    <a :href="itemLink" class="list-group-item list-group-item-action" aria-current="true">
    {{item.name}} {{item.title}},
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"></h5>
        </div>
        <p class="mb-1">{{item.overview}}</p>
    </a>
    `,
    computed: {
        itemLink() {
            debugger
            return './details.html?id=' + this.item.id +'&type=' + this.item.media_type

            
        }
    }

})