<script>

export default {

  name: 'AppHeader',
  data() {
    return {

    };
  },
}
</script>

<template>
  <header>
    <div class="d-flex p-3">
      <div class="img d-flex align-items-center">
        <img src="http://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt="logo">
      </div>
      <div class="title">
        <h1>
          Yu-Gi-Oh Api
        </h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appHeader.scss";
</style>