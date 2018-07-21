<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import 'styles/_variables.scss';
  @import 'styles/_general.scss';

</style>
