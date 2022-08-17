<template>

  <header>
    <mymenu></mymenu>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script scoped>
import mymenu from './components/mymenu.vue'

export default {
  name: 'App',
  components: {
    mymenu
  }
}
</script>

<style scoped>

</style>
