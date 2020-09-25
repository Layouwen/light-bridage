<template>
  <div class='wrapper'>
    <swiper :options="swiperOptions">
      <swiper-slide v-for='item of swiperList' :key='item.id'>
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
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination'
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_600x330_15f61339.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1503/9c/9cac0c06d55f4cf.water.jpg_600x330_5f177721.jpg'
      }]
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
