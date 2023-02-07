<script>

import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  data() {
    return {
      store
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  created() {
    axios

      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((response) => {
        console.log(response.data.data.slice(0,20));

        this.store.cardsList = response.data.data.slice(0,20);

      });
  }
}
</script>

<template>

  <AppHeader/>

  <AppMain/>
  
  <AppFooter/>

</template>

<style lang="scss">
@import "./styles/global.scss";
</style>
