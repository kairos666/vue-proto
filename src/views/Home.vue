<template>
  <div class="home">
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script>
