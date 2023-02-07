<script>

export default {

  name: 'AppCard',
  props: {
    card: Object
  },
}
</script>

<template>

    <div>

        <div class="card-img">
            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
        </div>

        <div class="card-info bg-warning p-2 mb-3 d-flex flex-column" style="height: 100px">
            <span class="title text-uppercase text-light" style="font-size: 14px;">
                {{ card.name }}
            </span>
            <span class="card-type" style="font-size: 12px;">
                {{ card.archetype }}
            </span>
        </div>

    </div>

</template>

<style lang="scss" scoped>
</style>