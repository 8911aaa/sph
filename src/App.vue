<template>
  <div>
    <Header></Header>
<router-view></router-view>

    <Footer v-show="$route.meta.requiresAuth"></Footer>
  </div>
</template>
<script>
import Header from './components/Header/indexx.vue'
import Footer from './components/Footer/index.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
