<template>
  <!-- <a :href="itemLink" class="list-group-item list-group-item-action" aria-current="true"> -->
  <router-link
    :to="itemLink"
    class="list-group-item list-group-item-action"
    aria-current="true"
  >
    {{ item.name }} {{ item.title }},
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1"></h5>
    </div>
    <p class="mb-1">{{ item.overview }}</p>
  </router-link>
</template>
<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    itemLink() {
      return {
        name: "details",
        query: { id: this.item.id, type: this.item.media_type },
      };

      // "./details.vue?id=" + this.item.id + "&type=" + this.item.media_type
    },
  },
};
</script>

