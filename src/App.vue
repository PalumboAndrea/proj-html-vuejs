<script>
import AppHeader from './components/Header/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/Footer/AppFooter.vue'

export default {
  components:{
    AppHeader,
    AppMain,
    AppFooter,
  },
  data(){
    return {
      
    }
  }
}

</script>

<template>

  <AppHeader />

  <AppMain />

  <AppFooter />
  
</template>

<style lang="scss">
@use './bootstrap/scss/bootstrap.scss' as *; 
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

*{
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

</style>
