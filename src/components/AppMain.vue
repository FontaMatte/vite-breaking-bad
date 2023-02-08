<script>
import axios from 'axios';
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
  },
  methods: {

    // FUNZIONE PER FILTRARE LE CARTE
    getCardsFiltered() {
      axios

        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
          params: {
            archetype: this.store.selectValue
          }
        })
        .then((response) => {

          if (this.store.selectValue != '') {
          this.store.cardsList = response.data.data.slice(0,50);
          }
          else {
            this.getCards();
          }
    
        });
    },
    // FUNZIONE DI RICHIESTA CARTE API
    getCards() {
      axios

        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then((response) => {

          this.store.cardsList = response.data.data.slice(0,50);

          this.store.loading = false;
    
        });
    }
  },
  created() {
   
    this.getCards();
    
    // RICHIAMO LA LISTA DEGLI ARCHETYPE
    axios

      .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {

        this.store.archetypesList = response.data;

      });
  }
}
</script>

<template>

  <main class="bg-warning">
    <div class="container py-3">
      <div class="row">
        <div class="col-3">

          <!-- SELECT -->
          <select class="form-select w-80 mx-3" 
            aria-label="type select"
            v-model="store.selectValue"
            @change="getCardsFiltered()">
            <option selected value="">Select Archetype</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypesList">
              {{ archetype.archetype_name }}
            </option>
            
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
        <!-- FINE CONTENITORE CARDS -->

      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/partials/appMain.scss";
</style>