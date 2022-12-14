<template>
  <div>
    <!-- 三级联动的全局组件 -->
    <Typenav></Typenav>
    <!-- 轮播图组件 -->
    <listlunbo></listlunbo>
     <!-- 商品热门排行组件 -->
    <Rank></Rank>
    <!-- 猜你喜欢组件 -->
    <Like></Like>
      <!-- 楼层/家用电器组件 -->
    <Foor></Foor>
      <!-- 商标组件 -->
    <Brand></Brand>
  </div>
</template>
<script>
import listlunbo from '@/pages/Home/listlunbo'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Foor from '@/pages/Home/Foor'
import Brand from '@/pages/Home/Brand'
export default {
  name: 'SphHome',
  components: {
    listlunbo,
    Rank,
    Like,
    Foor,
    Brand
  },
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>
