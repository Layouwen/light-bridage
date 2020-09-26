<template>
  <div class='wrapper'>
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for='item of list' :key='item.id'>
        <img class='swiper-img'
             :src='item.imgUrl' alt=''/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
// 忽略scoped穿透样式
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff

.wrapper
  // 防止图片加载过慢，导致抖动
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background: #eee;

  .swiper-img
    width: 100%
    height: 31.25vw
</style>
