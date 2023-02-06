<script>

export default {

  name: 'AppCard',
  props: {
    card: Object
  },
  data() {
    return {

    };
  },
}
</script>

<template>

    <div>

        <div class="card-img">
            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
        </div>

        <div class="card-info bg-warning p-2 mb-3" style="height: 100px">
            <h6 class="title text-uppercase text-light">
                {{ card.name }}
            </h6>
            <span class="card-type">
                {{ card.archetype }}
            </span>
        </div>

    </div>

</template>

<style lang="scss" scoped>
</style>