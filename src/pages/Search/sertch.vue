<template>
  <div>我是搜索页{{ keydown}}</div>
</template>
<script>
export default {
  name: 'SphSertch',
  props: ['keydown'],
  data () {
    return {
      searchcont: this.$route.params.keydown
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>
