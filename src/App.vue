<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      cards: []
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

        this.cards = response.data.data.slice(0,20);

      });
  }
}
</script>

<template>

  <AppHeader/>

  <AppMain :cardList="cards"/>
  
  <AppFooter/>

</template>

<style lang="scss">
@import "./styles/global.scss";
</style>
