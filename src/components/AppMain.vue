<script>
import AppLoader from './AppLoader.vue'
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {

  name: 'AppMain',
  data() {
    return {
      store
    };
  },
  components: {
    AppCard,
    AppLoader
  }
}
</script>

<template>

  <main class="bg-warning">
    <div class="container py-3">
      <div class="row">
        <div class="col-3">
          <select class="form-select w-80 mx-3" aria-label="type select">
            <option selected>Alien</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
          </select>
        </div>
      </div>
      <div class="mt-3 bg-light p-4">
        <div class="card-number bg-dark text-light p-3 fw-bold">
          Found {{ store.cardsList.length }} cards
        </div>
        <!-- CONTENITORE DELLE CARDS -->
        <AppLoader v-if="store.loading"/>

        <div class="card-container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            
            <div class="col text-center" v-for="card in store.cardsList">
            
              <AppCard :card="card"/>

            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appMain.scss";
</style>