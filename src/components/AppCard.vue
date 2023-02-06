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

        <div class="card-info">
            <h4 class="title">
                {{ card.name }}
            </h4>
            <h5 class="card-type">
                {{ card.archetype }}
            </h5>
        </div>

    </div>

</template>

<style lang="scss" scoped>
</style>